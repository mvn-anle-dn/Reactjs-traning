import React from 'react'
import { useState } from 'react'
import '../../assets/css/login.css'
import logo from '../../assets/images/bg-01.jpg'
import { supabase } from '../../hook/supabaseClient'

export default function Login() {

  const [email , setEmail] = useState(null);
  const [password , setPassword] = useState(null)

  const submit_login = async (e)=> {
    console.log(email);
    console.log(password)
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) {
        alert(error)
      } else {
        alert('success !!!')
      }
    } catch (error) {
      alert(error)
    }
    
  }
  
  return (
    <>
      <div className="bg-login">
        <form action="" onSubmit={submit_login} className="form-login">
          <div className="img-logo">
            <img src={logo} alt="" />
            <div className='over-lay'></div>
            <h1 className='text-logo'>SIGN IN</h1>
          </div>
          <div className="form-login-input">
            <div className="bg-form-lg">
            <div className="form-input" >
              <div className="lable-input">
                <span>UserName</span>
              </div>
              <input type="text" className="input-login" onChange={(e)=> setEmail(e.target.value) } placeholder='Enter Username' />
            </div>

            <div className="form-input">
              <div className="lable-input">
                <span>Password</span>
              </div>
              <input type="password" className="input-login"  onChange={(e)=> setPassword(e.target.value) }  placeholder='Enter Password'/>
            </div>

            <div className="remember-me">
              <div className="line-speac"> </div>
              <div className="remember-me-info">
                
                <div className="remember">
                  <input type='checkbox' />
                  Remember me
                </div>
                <div className="forgot-pw">Forgot Password?</div>
              </div>
            </div>
            <div className="btn-login-button">
             <button className='btn-login'>Login</button>
            </div>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}
