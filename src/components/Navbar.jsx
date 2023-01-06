import '../assets/css/navbar.css'
import React from 'react'
import logo from '../assets/images/kitty-dark.png'

export default function Navbar() {
  return (
    <>
    <div className="block">
      <div className="main-navbar">
        <img src={logo} alt="" className="cat-icon" />
        <div className="text-title">ALBUM CAT</div>
        <div className="search-cat">
          <input type="text" className="ip-search" placeholder='Search Cat' />
          <button className="btn-search">SEARCH</button>
        </div>
      </div>
    </div>
    </>
  )
}
