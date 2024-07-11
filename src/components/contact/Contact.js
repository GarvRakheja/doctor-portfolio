import React from 'react'
import "./Contact.css"
import mail_icon from "../../../src/assests/images/email.png"
import location_icon from "../../../src/assests/images/location.png"
import call_icon from "../../../src/assests/images/call.png"
import menu_open from "../../../src/assests/images/openNav.png"

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "655a53f8-78a0-484a-acd8-fadc6b767946");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message)
        }}

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src='' alt='' />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new patient, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt='' />
                        <p>alexdentalcare@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt='' />
                        <p>+7789-767-987</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt='' />
                        <p>CA, United States</p>
                    </div>
                </div>
                </div>
               
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name" />
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email" />
                    <lable htmlFor="">Write your message here</lable>
                    <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact