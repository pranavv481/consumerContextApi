import React, { Component } from 'react'
import { shopContext } from "../Contexts/ShopContext";
class ShowProducts extends Component {

    render() {
       
        
        return (
            <shopContext.Consumer>
                {(contextData) => {
                    console.log(contextData)
                     const { products } = contextData
                    return (
                        <div>
                            <h1>Show Products</h1>
                            {products.map(data => (

                                <div key={data.id}>
                                    <h3>{data.name}</h3>
                                    <h3>{data.price}</h3>
                                </div>
                            ))}
                        </div>
                    )
                }}
            </shopContext.Consumer>

        )
    }
}

export default ShowProducts
