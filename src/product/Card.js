import React from 'react';
import { useStateValue } from '../StateManagement/StateProvider';
import './card.css';

function Card({id,rating,image,title,price}) {
  const [,dispatch]=useStateValue();
  const handleadd = ()=>{
    console.log("added");
    dispatch({
      type: "add",
      payload: {
        id: id,
        rating: rating,
        image:image,
        title:title,
        price:price
      }
    })
  }
 let x=Array(rating).fill("⭐");
  return (
    <div className='card'>
    <div className='card__info'>
    <h3 className='card__heading'>{title}</h3>
    <div className='card__price'><span>₹</span><span>{price}</span></div>
    <div className='card__rating'>
      {
        x.map((element)=> <span className='card__star'>{element}</span>)
      }
    </div>
    </div>
    <div className="card__imagediv">
    <img src={image} alt="" className={title}/>
    </div>
    <button className='card__btn' onClick={handleadd}>Add to Cart</button>
    </div>
  )
}

export default Card