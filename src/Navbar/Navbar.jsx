import './style.css'
import logo from '../logo.svg'
import iconFb from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
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
              <li><a href='home' >HOME</a></li>
              <li><a href='product' >PRODUCT</a></li>
              <li><a href='about' >ABOUT US</a></li>
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