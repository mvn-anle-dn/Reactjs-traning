import React, { useEffect, useState } from 'react'
import { supabase } from '../../../hook/supabaseClient';
import { Link, redirect, useParams } from 'react-router-dom';

export default function EditPrd() {
  // let match = useRouteMatch('/edit/:productId');
  let {id} = useParams();
  let productId = id;

  const [product, setProduct] = useState({});

  useEffect(  () => {
    const getData = async () => {
      const { data, error } = await supabase.from('product').select().eq('id', productId)
      console.log(data[0]);
      if (data) {
        setProduct(data[0])
      } else {
        alert(error)
      }
    }

    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase
    .from('product')
    .update({ name: product.name , description: product.description , price: product.price }).eq('id',productId)

    if(error) {
      alert(error)
    } else {
      alert('Update success !!!')
      return redirect("/list_product");
    }
  }


  return (
    <div className="create-prd">
      <div className="title-create-prd">
        <h1>Create product</h1>
      </div>
      <form onSubmit={handleSubmit} className="new-product-form">
        <div className="form-group">
          <label htmlFor="name">Name Product:</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(event) => setProduct({ ...product , name: event.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={product.description}
            onChange={(event) => setProduct({ ...product , description: event.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={product.price}
            onChange={(event) => setProduct({ ...product , price: event.target.value})}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}