import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
          <h2>Foodie Express</h2>
            {/* <img src={assets.logo} alt="" /> */}
            <p> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
       <h2>GET IN TOUCH</h2>
       <ul>
        <li>+123 456 67887</li>
        <li>contact@foodexpress.com</li>
       </ul>
        </div>
       </div>
<hr />
   <p className="footer-copyright">Copyright 2024 foodieexpress.com -  All rights reserved</p>
        </div>
  )
}

export default Footer