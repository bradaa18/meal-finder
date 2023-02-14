import React, {Component} from "react";
import CategoryList from "./CategoryList";
import CategoryDescription from "./CategoryDescription";
import {useEffect, useState} from 'react';

function App() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([]);
    const [meal, setMeal] = useState([]);
    let [categoryDesc] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8000/categories')
            .then(res => res.json().then(data => {
                console.log(data.categories)
                setCategories(data.categories)
                setCurrentCategory(data.categories[0].strCategoryDescription)
                console.log(data.categories[0])
            }))

    }, []);


    function handleChangeCategory(e) {
        console.log(e.target.value + ' ' + JSON.stringify(e.target.value))
        setCurrentCategory(e.target.value);
        categoryDesc = e.target.value;
        console.log(currentCategory)
        return currentCategory;
    }

    // console.log(categories);

    const getRandomMeal = async () => {
        fetch('http://localhost:8000/meal/random')
            .then(res => res.json().then(data => {
                console.log(data)
                //setMeal(data.meals.map(meal => { return <Meal key={meal.strMeal} meal={meal} /> }))
                setMeal(<p>{data.meals[0].strMeal} <br/> <img src={data.meals[0].strMealThumb}></img></p>)
            }))
    }

    return (
        <div className="App">
            <h1>Meal-Finder</h1>
            <h3>Select a Category:</h3>
            <select value={currentCategory} onChange={(e) => handleChangeCategory(e)}
                    id={"selectCategory"}><CategoryList categories={categories}/></select>
            <CategoryDescription category={currentCategory}/>
            <button onClick={getRandomMeal}>Get Random Meal</button>
            {meal}
            <br/>
            <input placeholder="Meal"></input>
        </div>
    );

}

export default App;
