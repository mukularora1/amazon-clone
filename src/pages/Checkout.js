import React from 'react';
import CheckoutProduct from '../product/CheckoutProduct';
import { useStateValue } from '../StateManagement/StateProvider';
import './checkout.css';



function Checkout() {
  const[basket,]=useStateValue();
  // const[total,setTotal] = useState(0);


  // setTotal(basket?.reduce((total,item)=> 
  // total+item.price,0));

  let total= basket.reduce((amount,item)=>{
return amount+item.price
  },0)

//  console.log(basket);
  return (
    <div className='checkout'>
    <div className='checkout__part1'>

      <div className='checkout__ad'>
        <img alt='ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/May_22/HSBCSCB_ILM_640x45._CB621559610_.jpg' className='checkout__ad-img'/>
      </div>
      {
        basket.map((element)=>{
          return (
            <div>
      <CheckoutProduct id={element.id} title={element.title} price={element.price} rating={element.rating} image={element.image}/>

            </div>
          )
        })
      }
    </div>
    <div className='checkout__part2'>
      <div className='subtotal__heading'>Sub-Total (total Item {basket.length})</div>
      <div className='subtotal'>₹ {total}</div>

    </div>
    </div>
  )
}

export default Checkout