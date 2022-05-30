import React from 'react';
import Card from '../product/Card';
import './home.css';
import ProductList from '../product/ProductList';

function Home() {
  return (
    <div className='home'>
    <img alt='prime show' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/May_hero/YKDD_-_3000x1200_Hero-Tall_6._CB636814435_.jpg' className='home__image'/>
      <div className='home__div'>
      <Card title={ProductList[0].title} price={ProductList[0].price} image={ProductList[0].image} id={ProductList[0].id} rating={ProductList[0].rating}/>
      <Card title={ProductList[1].title} price={ProductList[1].price} image={ProductList[1].image} id={ProductList[1].id} rating={ProductList[1].rating}/>
      </div>
      <div className='home__div2'>
      <Card title={ProductList[2].title} price={ProductList[2].price} image={ProductList[2].image} id={ProductList[2].id} rating={ProductList[2].rating}/>
      <Card title={ProductList[3].title} price={ProductList[3].price} image={ProductList[3].image} id={ProductList[3].id} rating={ProductList[3].rating}/>
      <Card title={ProductList[4].title} price={ProductList[4].price} image={ProductList[4].image} id={ProductList[4].id} rating={ProductList[4].rating}/>
      </div>
      <div className='home__div2'>
      <Card title={ProductList[5].title} price={ProductList[5].price} image={ProductList[5].image} id={ProductList[5].id} rating={ProductList[5].rating}/>

      </div>
    </div>
  )
}

export default Home