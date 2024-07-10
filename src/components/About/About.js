import React from 'react'
import "./About.css"
import profile_img from "../../../src/assests/images/doctorprofile.jpg"

const About = () => {
    return (
        <div className='about'>
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
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>React js</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>javascript</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Next js</p>
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
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div  className='about-achivement'>
                    <h1>60+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About