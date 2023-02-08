import React from 'react'
import { useState } from 'react';
import '../../../assets/css/create-prd.css'
import { supabase } from '../../../hook/supabaseClient';

export default function CreateProduct() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase
    .from('product')
    .insert({ name , description , price })

    if(error) {
      alert(error)
    } else {
      alert('Create success !!!')
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}
