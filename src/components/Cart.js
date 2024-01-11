import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, clearAllCart } from "../app/features/cartSlice";


const products =[
    {id:1, name:"t-shirt", price:200, status:true},
    {id:2, name:"pant", price:300, status:true},
    {id:3, name:"blazer", price:400, status:true},
    {id:4, name:"jeans", price:500, status:true},
]



export const Cart = () => {
    const {cartProductIds} = useSelector((state) => state)
    const dispatch = useDispatch()
  return (<div>
        {
            products.length && products.map(product =>{
                return <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                   
                    { !cartProductIds.includus(product.id)&&(<button onClick={()=>dispatch(addToCart(product.id))}>Add to cart</button>)}
                    {cartProductIds.includus(product.id)&&(<button onClick={()=>dispatch(removeFromCart(product.id))}>remove to cart</button>)}
                </div>
            })
        }

        
  </div>)
};
