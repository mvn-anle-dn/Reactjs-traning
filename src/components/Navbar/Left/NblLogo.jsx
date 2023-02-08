import React from 'react'
import '../../../assets/css/nbl-logo.css'
import logo from '../../../assets/images/logo.png'

export default function NblLogo() {
  return (
    <div className="logo-nbl">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="logo-text">
        SAMPLE APP
      </div>
    </div>
  )
}
