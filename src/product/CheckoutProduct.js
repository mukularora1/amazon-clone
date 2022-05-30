import React from 'react';
import { useStateValue } from '../StateManagement/StateProvider';
import './checkoutproduct.css'

function CheckoutProduct({id,image,title,rating,price}) {
    const [,dispatch]=useStateValue();
    const handleRemove=()=>{
        dispatch({
            type:"remove",
            payload:{
                id:id
            }
        })
    }
  return (
    <div className='checkoutproduct'>
        <div className='checkoutproduct__title'>{title}</div>
        <div className='checkoutproduct__price'><span>₹</span><span>{price}</span></div>
        <div className='stars'>{Array(rating).fill("⭐")}</div>
        <div>
            <img alt={title} src={image} className="checkoutproduct__image"/>
        </div>
        <button className='checkoutproduct__btn' onClick={handleRemove}>Remove from basket</button>
    </div>
  )
}

export default CheckoutProduct