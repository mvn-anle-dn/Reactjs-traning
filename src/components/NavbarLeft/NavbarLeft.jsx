import React from 'react'
import '../../assets/css/navbarLeft.css'
import NblLogo from '../Navbar/Left/NblLogo'
import logo from '../../assets/images/avata.jpeg'
import NblUser from '../Navbar/Left/NblUser'
import NblMenu from '../Navbar/Left/NblMenu'


export default function NavbarLeft() {

  

  return (
    <div className="main-nbl">
      <NblLogo/>
      <NblUser/>
      <NblMenu/>
    </div>
  )
}
