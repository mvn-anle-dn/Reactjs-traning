import React, { useState } from 'react'
import './style.css'

export default function CardUser(props) {
  const [user,setUser] = useState(
  )
  return (
    <>
      <div className="card">
        <div className="card-table">
          <div className="table-avata">
            <div className="avata">
              <img src={props.avatar} alt="" />
            </div>
          </div>
          <div className="info-table">
            <div className="info">
              <h4>{props.first_name} {props.last_name}</h4>
              <h4>{props.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
