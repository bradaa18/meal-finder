import React from 'react'
import CategoryMeal from "./CategoryMeal";

export default function CategoryMeals({ meals }) {
    return (
        meals.map(meal => {
            return <CategoryMeal key={meal.idMeal} meal={meal} />
        })
    )
}
