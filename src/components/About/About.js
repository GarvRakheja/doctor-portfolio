import React from 'react'
import "./About.css"
import profile_img from "../../../src/assests/images/doctorprofile.jpg"

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src='' alt='' />
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img src={profile_img} alt='' />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>Spectra Dental Care is a state of art dental clinic that offers services for any dental issue such as pain, sensitivity, yellowishness, staining, malalignment, missing teeth and so on. We offer a wide range of services from RCTs and caps to veneers, implants, braces and aligners. </p>
                        <p>We dentists at Spectra Dental Care practice efficient and high-quality dentistry at affordable prices so as to cater most population. Equipped with the best armamentarium.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>General Medicine</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Pediatrics</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Cardiology</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Surgery</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-achivements'>
                <div  className='about-achivement'>
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIANCE</p>
                </div>
                <hr/>
                <div  className='about-achivement'>
                    <h1>500+</h1>
                    <p>Patient</p>
                </div>
                <hr/>
                <div  className='about-achivement'>
                    <h1>300+</h1>
                    <p>Happy Patient</p>
                </div>
            </div>
        </div>
    )
}

export default About