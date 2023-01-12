import React, { useState } from 'react'
import ProductModel from './ProductModel'

function Product() {


    const [products] = useState<ProductModel[]>([{id:1, name: "Names", price: 12, descriptions: "Aciklama", stok: false }])


    return (
        <>

            {products.map((item, index) => {
                return (
                    <>
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <h2>{item.descriptions}</h2>
                        <h3>{item.price}</h3>
                        <h2>{item.stok}</h2>
                    </div>
                    </>
                    
                )
            })}

        </>
    )
}

let data = "17";

export default Product
export { data }