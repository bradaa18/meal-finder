import React, { Component }from "react";
import CategoryList from "./CategoryList";
import { useState } from 'react';
function App() {
  const [categories, setCategories] = useState([]);

  fetch('http://localhost:8000/categories')
       .then(res => res.json().then(data => {
           console.log(data.categories)
           setCategories(data.categories)
           categories.forEach(c =>{
               //console.log(c.strCategory)
           })
       }))

   // console.log(categories);

        return (
            <div className="App">
                <h1>Meal-Finder</h1>
                <h3>Select a Category:</h3>
                <select><CategoryList categories={categories}/></select>
            </div>
        );
    }

    export default App;
