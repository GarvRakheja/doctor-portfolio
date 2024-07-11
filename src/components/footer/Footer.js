import React from 'react'
import "./Footer.css"
// import footer_logo from "../../../src/assests/images/doctorprofile.jpg"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img src='https://demo2.themelexus.com/drchanges/wp-content/uploads/2019/06/logo.svg' alt='' />
                    <p>Dental Care is a state of art dental clinic.</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img src='' alt='' />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className='footer-subscribe'>subscribe</div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>© 2023 Alex Bennett. All rights reserved.</p>
                <div className='footer-bottom-right'>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer