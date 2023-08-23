import React, { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters/animatedLetters"
import './contact.scss'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timerId);
    }, []);

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
                        words
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Contact;