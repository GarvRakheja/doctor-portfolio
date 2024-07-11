import React from 'react'
import "./Home.css"
import profile_img from "../../../src/assests/images/doctorprofile.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
    return (
        <div id='home' className='home'>
            <img src={profile_img} alt='' className='profileImg' />
            <h1><span>I'm Alex Bennett,</span> doctor based in USA.</h1>
            <p>Dental Care is a state of art dental clinic that offers services for any dental issue such as pain sensitivity, yellowishness, staining, malalignment,.</p>
            <div className='home-action'>
                <div className='home-connect'>
                    <AnchorLink className='anchor-link' offset={50} href="#contact">Get Appointment</AnchorLink>
                </div>
                <div className='home-resume'>
                    Discover more
                </div>
            </div>
        </div>
    )
}

export default Home