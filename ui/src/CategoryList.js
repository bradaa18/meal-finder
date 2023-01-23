import React from 'react'
import Category from "./Category";

export default function CategoryList({ categories }) {
    return (
        categories.map(category => {
            return <Category key={category.idCategory} category={category} />
        })
    )
}
