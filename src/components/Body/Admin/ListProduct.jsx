import React from 'react'
import '../../../assets/css/list-prd.css'
import TableProdcut from './TableProdcut'
import { supabase } from '../../../hook/supabaseClient';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ListProduct() {
  // const products = [
  //   { id: 1, name: "Product 1", description: "This is product 1", price: 50 },
  //   { id: 2, name: "Product 2", description: "This is product 2", price: 60 },
  //   { id: 3, name: "Product 3", description: "This is product 3", price: 70 }
  // ];

  const [products , setProducts] = useState(null)
  
  useEffect(()=>{
    const getData = async () => {
      const { data, error } = await supabase
      .from('product')
      .select().is('deleted_at',null)
      setProducts(data)
      console.log(products);
    }
  
    getData()
  },[])

  

  return (
    <div className="list-prd">
      <div className="title-prd">
       <h1>List Product</h1>
      </div>
      {products ? <TableProdcut products={products} /> : '' }
    </div>
  )
}
