import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Tomato is a convenient food app where users can explore, order, and enjoy a variety of cuisines. Fast delivery, great deals, and tasty meals await!</p>
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
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8348691344</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024  &#169; Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
