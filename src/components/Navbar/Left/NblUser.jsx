import React from 'react'
import avata from '../../../assets/images/avata.jpeg'
import '../../../assets/css/nbl-user.css'
import { supabase } from '../../../hook/supabaseClient'


export default function NblUser() {
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if(error) {
      alert(error)
    } else {
      alert('Logout success !!!')
    }
  }

  return (
    <div className="nbl-user">
        <div className="user-avata">
          <img src={avata} alt="" />
        </div>
        <div className="user-info">
          <div className="userName">ANLEE</div>
          <div className="contract">Boss</div>
          <button className="logout" onClick={logout}>Logout</button>
        </div>
      </div>
  )
}
