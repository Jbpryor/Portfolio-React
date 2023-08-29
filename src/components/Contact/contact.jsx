import React, { useState, useEffect, useRef } from 'react';
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import './contact.scss';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timerId);
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();

        const serviceID = "service_ca48i2m";
        const templateID = "template_q7yi1ac";
        const publicKey = "WVIP6H-6-AW8sHp9L";

        const name = form.current.elements.name.value;
        const email = form.current.elements.email.value;
        const subject = form.current.elements.subject.value;
        const message = form.current.elements.message.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
      
        const params = {
          name,
          email,
          subject,
          message,
        };
    
        try {
            await emailjs.send(serviceID, templateID, params, publicKey);
            alert('Message Sent');
            form.current.reset();
          } catch (error) {
            alert('Failed to send, please try again');
            console.error('EmailJS Error:', error);
          }
    }; 

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={'Contact me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm always looking for new and interesting oportunities. Send something my way!
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" className='name' name="name" placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" className='email' name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" className='subject' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" className='message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Brent Pryor,
                    <br />
                    United States
                    <br />
                    Tulsa, Oklahoma 74135
                    <span>sunyata0601@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[36.153980, -95.992775]} zoom={13}>
                        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[36.153980, -95.992775]}>
                            <Popup>Brent lives near here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact;