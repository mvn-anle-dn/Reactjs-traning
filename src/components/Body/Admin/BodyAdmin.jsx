import React from 'react'
import { useRoutes } from "react-router-dom";
import '../../../assets/css/bodyAdmin.css'
import CreateProduct from './CreateProduct';
import EditPrd from './EditPrd';
import ListProduct from './ListProduct';

export default function BodyAdmin() {
  const router = [{
    path: '/' ,
    element: <ListProduct/>
  },{
    path: '/list_product' ,
    element: <ListProduct/>
  } ,{
    path: '/create' ,
    element: <CreateProduct/>
  } , {
    path: '/edit/:id' ,
    element: <EditPrd/>
  } ]

  const element = useRoutes(router)
  return (
    <div className="admin--body">
      {element}
    </div>
  )
}
