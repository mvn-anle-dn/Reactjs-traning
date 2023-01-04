import '../assets/scss/navbar.css'
import logo from '../logo.svg'
import iconFb from '../assets/images/Navbar/facebook.svg'
import twitter from '../assets/images/Navbar/twitter.svg'
import instagram from '../assets/images/Navbar/instagram.svg'
import { Link } from 'react-router-dom'
export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="menu">
          <div className="menu-header">
            <div className="logo">
              <img src={logo} alt="" className='img-logo' />
            </div>
            <ul className="link">
              <li><Link className='nav-link' to='/' >HOME</Link></li>
              <li><Link className='nav-link' to='/product'>PRODUCT</Link></li>
              <li><a className='nav-link' href='/'>ABOUT US</a></li>
            </ul>
          </div>
          <div className="menu-icon">
            <div className="icon">
              <a href='#'><img src={iconFb} alt=""  className="img-icon" /></a>
            </div>
            <div className="icon">
              <a href='#'><img src={twitter} alt="" className="img-icon" /></a>
            </div>
            <div className="icon">
              <a href='#'><img src={instagram} alt="" className="img-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}