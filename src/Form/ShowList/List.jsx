import React, { useState,useEffect } from 'react'
import CardUser from '../Card/CardUser';
import './list.css'

const URL = 'https://reqres.in/api/users'
export default function List() {
  
  const [user ,setUser] = useState([]);
  const [page , setPage] = useState(1);

  function setActive(index){
    for(let i=1 ; i <= 3  ; i++ ){    
      document.getElementById('index'+i).classList.remove("active");   
    }
    if(index == 'next') {
      if (page < 3) {
        document.getElementById('index'+(page+1).toString()).classList.add("active");
        setPage(page + 1)
        console.log(page);
      }else {
        document.getElementById('index'+(page).toString()).classList.add("active");
      }
    }else if(index == 'previous'){
      if(page > 1) {
        document.getElementById('index'+(page-1).toString()).classList.add("active");
        setPage(page - 1)
      }else {
        document.getElementById('index'+(page).toString()).classList.add("active");
      }
      
    }else {
      document.getElementById('index'+index).classList.add("active");
      setPage(index)
    }
    
    
  }
  
  useEffect(() => {
    const getData = async (index) => {
      const data = await fetch(`${'https://reqres.in/api/users?page='+index.toString() }`) ;
      const list = await data.json();
      setUser(list.data)
    };

    getData(page);
  },[page])

  return (
    <>
    <div className="get-list">
      {
        user.map((u,index) => 
          <CardUser key={index} email = {u.email} avatar = {u.avatar} last_name = {u.last_name} first_name = {u.first_name} />
        )
      }
    </div>
    
    <div className="page">
      <div className="page-css">
        <div id='Previous' onClick={()=> setActive('previous')} className="left-right" ><p>Previous</p></div>
        {
          [1,2,3].map((x,index) =>
            <div id={`index${index+1}`} key={index} onClick={()=>setActive(x)} className={index == 0  ? 'index active' : 'index'}><p>{x}</p> </div>
            )
        }
        <div id='Next' onClick={()=> setActive('next')} className="left-right"><p>Next</p></div>
      </div>
    </div>
        
    </>
  )
}
