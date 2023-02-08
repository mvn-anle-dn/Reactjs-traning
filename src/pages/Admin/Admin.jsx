import React from 'react'
import '../../assets/css/admin.css'
import BodyAdmin from '../../components/Body/Admin/BodyAdmin'
import NavbarLeft from '../../components/NavbarLeft/NavbarLeft'

export default function Admin() {
  return (
    <div className="main-admin">
      <div className="navbar-left">
        <NavbarLeft/>
      </div>
      <div className="admin-body">
        <BodyAdmin/>
      </div>
      
    </div>
  )
}
