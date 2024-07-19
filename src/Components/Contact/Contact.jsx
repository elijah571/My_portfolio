import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/xovavgdo', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently available to take new projects, so feel free to send a message about anything you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail icon" />
              <p>elijahfx@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call icon" />
              <p>+2347010057350</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location icon" />
              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder='Enter your name' required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder='Enter your email' required />
          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
          {status === 'SUCCESS' && <p>Thanks! Your message has been sent.</p>}
          {status === 'ERROR' && <p>Oops! There was an error.</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
