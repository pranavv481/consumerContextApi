import React, {createContext} from 'react';

export const shopContext = createContext()

class ShopContextProvider extends React.Component {

    state= {
        "products":[
            {id:1, name:"Laptop1", price:200},
            {id:2, name:"Laptop2", price:200},
            {id:3, name:"Laptop3", price:200},
            {id:4, name:"Laptop4", price:200},
        ]
    }
    render(){
        return(
            <shopContext.Provider value={{...this.state}}>
                {this.props.children}
            </shopContext.Provider>
            )
    }
}

export default ShopContextProvider