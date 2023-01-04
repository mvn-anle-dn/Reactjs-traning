import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Card } from './body/Card';
import '../assets/scss/product.css'
import ShowProduct from './body/ShowProduct';

export default function Product() {
  
  const [product,setProduct] = useState([]);  
  useEffect(()=> {
   const getProduct = async () => {
    let data = await fetch('https://fakestoreapi.com/products')
    let list = await data.json();
    setProduct(list);
    console.log(list);
   } 
  getProduct();
   
  },[])

  const [show,setShow] = useState(false);
  const [prd , setPrd] = useState();
  
  return (
    <>
    <div className="product-main">
      {
        product.map((pd,index) => 
        <Card  onClick={()=> {setShow(true); setPrd(pd) ; console.log(prd); }} key={index} img = {pd.image} title = {pd.title} description = {pd.description} price = {pd.price} />
        )
      }
      {

      }
      <ShowProduct show = {show} setShow = {setShow} prd = {prd}/>
  </div>
    </>
  )
}
