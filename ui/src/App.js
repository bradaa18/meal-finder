import React, {Component} from "react";
import CategoryList from "./CategoryList";
import CategoryDescription from "./CategoryDescription";
import {useEffect, useState} from 'react';

function App() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([]);
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

    return (
        <div className="App">
            <h1>Meal-Finder</h1>
            <h3>Select a Category:</h3>
            <select value={currentCategory} onChange={(e) => handleChangeCategory(e)}
                    id={"selectCategory"}><CategoryList categories={categories}/></select>
            <CategoryDescription category={currentCategory}/>
        </div>
    );

}

export default App;
