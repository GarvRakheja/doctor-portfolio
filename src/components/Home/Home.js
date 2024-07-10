import React from 'react'
import "./Home.css"
import profile_img from "../../../src/assests/images/doctorprofile.jpg"

const Home = () => {
    return (
        <div className='home'>
            <img src={profile_img} alt='' />
            <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
            <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            <div className='home-action'>
                <div className='home-connect'>
                    Connect with me
                </div>
                <div className='home-resume'>
                    My resume
                </div>
            </div>
        </div>
    )
}

export default Home