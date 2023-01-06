import '../assets/css/show.css'
import React from 'react'

export default function ShowCat({show,img,set}) {
  return (
    <>
    <div className={`background-show ${show ? '' : 'hidden'}` } onClick = {()=>set(false)}   >CAT</div>
    <div className={`main-show ${show ? '' : 'hidden'} `}>
      <img src={img} alt="" />
    </div>

    </>
  )
}
