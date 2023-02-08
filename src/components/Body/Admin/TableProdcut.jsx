import React from 'react'
import '../../../assets/css/table-prd.css'
import { Link, redirect } from 'react-router-dom'
import { supabase } from '../../../hook/supabaseClient'
export default function TableProdcut({products}) {
  const delete_prd = async (id_prd) => {
    let text = 'You have deleted record ?'

    if (window.confirm(text)  == true) {
      const { error } = await supabase.from('product')
                        .update({delete_at: true}).eq('id',id_prd)

        if (error) {
          alert(error)
        }else {
          alert('delete success !!!')
        }
        
    }
    
  }
  return (
    <div className="main-table-prd">
      <table className="table-prd">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={()=> delete_prd(product.id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
