import '../../assets/scss/showProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { faMinus , faPlus , faTruck , faCartShopping , faBolt } from '@fortawesome/free-solid-svg-icons';
export default function ShowProduct({show, setShow , prd}) {
  // console.log(check);
  // const [show,setShow] = useState(check)
  // console.log(props.check);
  
  return (
    <>
    <div className={`backgorund-show ${show ? '': 'hidden'}`}  onClick={()=> setShow(false)} ></div>
    <div className={`product-show ${show ? '': 'hidden'}`} >
      <div className="body-product">
        <div className="image-product">
          <img src={`${prd?.image}`} alt="" />
        </div>
        <div className="description-product">
          <div className="title-prd">
          <h1>{prd?.title}</h1> 
          <div className="price-product"><p className='price-1'>{prd?.price}</p><span>$</span></div>
          <p className='description'>{prd?.description}</p>
          </div>
          <div className="input-prd">
            <div className="quantity">
              <div className="transport">
                <p className="title-transport"><FontAwesomeIcon icon={faTruck} /> Transport :</p> <p className='text-transport'><FontAwesomeIcon icon={faBolt} /> Free Ship</p>
              </div>
              <div className="count-prd">
                <p className='title-quantity'><FontAwesomeIcon icon={faCartShopping} /> Quantity :  </p>
                <div className="minus"><FontAwesomeIcon icon={faMinus} /></div>
                <div className="number-prd"><p>1</p></div>
                <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
              </div>
            </div>
            <div className="payment">
              <button className="bt-prd">BUY NOW</button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="close-prd" onClick={()=> setShow(false)} >X</div>
    </div>
    </>
  )
}