import React, { useRef, useState } from 'react';
import './ContactMe.css';
import Phone from '../img/icons8-phone-48.png';
import Email from '../img/icons8-email-64.png';
import Address from '../img/icons8-address-48.png';
import emailjs from 'emailjs-com';
const ContactMe = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_cfg901i', 'template_h13y645', formRef.current, 'user_PEXsxVJQG8GMEbYz3aBVE')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Contact Me</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="contact-icon"
                            />+880 178406632
                        </div>
                        <div className="contact-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="contact-icon"
                            />maher168082@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="contact-icon"
                            />Chowmohani-3821, Noakhali
                            Hazipur, Ward-04

                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <strong>What's your story?</strong> Get in touch. Always available for freelancing if the right project comes along me
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' /><br />
                        <input type="text" placeholder='Subject' name='user_subject' /><br />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;