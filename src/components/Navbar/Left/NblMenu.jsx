import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/nbl-menu.css'



export default function NblMenu() {
  const menu = [
    {title : 'Listing' , 
     link: '/list_product'
    } , 
    {title : 'Create', 
     link: '/create'} ,
    {title : 'User'}
  ]

  const [active , setActive] = useState(null)
  return (
    <>
    <div className="nbl-menu">
    {
    menu.map((list,index) => {
      return(
       <>
       <Link to={`${list.link}`}> 
        <div key={index} onClick={()=> setActive(list.title)} className={`menu-list ${active === list.title ? 'active' : ''} `}>
          <h3>{list.title}</h3> 
        </div>
       </Link> 
       </>
       
      )
      
    })
    }
    
      </div>
    </>
    
  )
}
