import React, { useState } from 'react'
import CategoryModel from './CategoryModel'

function Category() {

    const [categories] = useState<CategoryModel[]>([{ id: 1, name: "A" }])
    return (
        <>
            <ul>
                {categories?.map((item, index) => {
                    return (
                        <>
                            <li key={index}>{item.name}</li>
                        </>)
                })}
            </ul>
        </>
    )
}

export default Category