import React from 'react'
import ProductList from '../commponents/productList'
import Hero from './hero'
import NewSales from '../commponents/NewSales'; 
export default function Home() {



  return (
    <div  style={{width:'100%'}}>
    
  
    <Hero/>
        <NewSales/>

        <ProductList/>

        

    </div>
    )
}
