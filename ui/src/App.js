import React, {Component} from "react";
import CategoryList from "./CategoryList";
import CategoryDescription from "./CategoryDescription";
import {useEffect, useState} from 'react';
import CategoryMeals from "./CategoryMeals";

function App() {
    const [categories, setCategories] = useState([]);
    const [categoryDescription, setCategoryDescription] = useState([]);
    let [categoryName, setCategoryName] = useState([]);
    const [categoryMeals, setCategoryMeals] = useState([]);
    const [meal, setMeal] = useState([]);
    let [categoryDesc] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8000/categories')
            .then(res => res.json().then(data => {
                //console.log(data.categories)
                setCategories(data.categories)
                categoryName =data.categories[0].strCategory;
                setCategoryDescription(data.categories[0].strCategoryDescription)
                //console.log(categoryName)
                //console.log(data.categories[0].strCategory)
                listCategoryMeals();
            }))

    }, []);

    function listCategoryMeals() {
        fetch('http://localhost:8000/category?name=' + categoryName)
            .then(res => res.json().then(data => {

                console.log(categoryName)
                console.log(data)
                setCategoryMeals(data.meals)
            }))
    }


    function handleChangeCategory(e) {
        //console.log(e.target.value + ' ' + JSON.stringify(e.target.value))
        var sel = document.getElementById('selectCategory');

        setCategoryDescription(e.target.value);
        categoryDesc = e.target.value;
        categoryName = sel.options[sel.selectedIndex].text;

        listCategoryMeals();
        //console.log(categoryDescription)
        return categoryDescription;
    }

    // console.log(categories);

    const getRandomMeal = async () => {
        fetch('http://localhost:8000/meal/random')
            .then(res => res.json().then(data => {
                //console.log(data)
                //setMeal(data.meals.map(meal => { return <Meal key={meal.strMeal} meal={meal} /> }))
                setMeal(<p>{data.meals[0].strMeal} <br/> <img src={data.meals[0].strMealThumb}></img></p>)
            }))
    }

    return (
        <div className="App">
            <h1>Meal-Finder</h1>
            <h3>Select a Category:</h3>
            <select value={categoryDescription} onChange={(e) => handleChangeCategory(e)}
                    id={"selectCategory"}><CategoryList categories={categories}/></select>
            <CategoryDescription category={categoryDescription}/>
            <hr/>
            <h3>Meals by current Category</h3>
            <div>
            <CategoryMeals meals={categoryMeals}></CategoryMeals>
            </div>
            <br/>
            <hr/>
            <button onClick={getRandomMeal}>Get Random Meal</button>
            {meal}
            <br/>
        </div>
    );

}

export default App;
