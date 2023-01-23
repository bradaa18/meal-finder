import React from 'react'

export default function Category({ category }) {

    return (
            <option name={category.strCategory}>{category.strCategory}</option>
    )
}
