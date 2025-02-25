import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Food Lorem, ipsum dolor sit amet consectetur adipisicing elit.soo good</p><p>
            Food Lorem, ipsum dolor sit amet consectetur adipisicing elit.? food for healt
            
            </p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>Aboutus</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8748 384 383</li>
                    <li>content@1827gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyrights">
            copyrights 2025 @kpr -All Rights Recived
        </p>
    </div>
  )
}

export default Footer
