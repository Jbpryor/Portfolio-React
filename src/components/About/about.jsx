import React, { useState, useEffect } from 'react';
import './about.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faHtml5, faJsSquare, faPython, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timerId);
    }, []);


    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={'About me'.split('')} 
                    idx={15}
                    />
                </h1>
                <p>
                    I have a passion for creativity and a constant drive to learn new and 
                    interesting things. As an experienced restaurant manager, I was seeking 
                    a new challenge with higher potential for growth when a friend introduced 
                    me to programming. Initially feeling lost, I was curious and determined 
                    to figure it out. It reminded me of the interests I had when I was 
                    younger, influenced by my father who worked as an IT manager.
                </p>
                <p>
                    I discovered that a dynamic role in software development would allow me 
                    to apply my problem-solving skills and attention to detail. With a 
                    background in managing teams, implementing process improvements, and 
                    delivering exceptional customer service, I bring valuable skills to the 
                    table. Currently, I am self-taught in programming through online courses, 
                    including FreeCodeCamp's courses for HTML, CSS, JavaScript, and Python. 
                    I have also gained practical knowledge from multiple YouTube tutorials, 
                    ranging from building websites and webpages to using GitHub and creating 
                    Android applications. Additionally, I utilize Windows Scheduler to run a 
                    daily Python program that scrapes emails containing bill information and 
                    updates it to an Excel spreadsheet for my finances.
                </p>
                <p>
                    I am eager to continue developing my skills and contribute to a 
                    fast-paced development team. I pride myself on being adaptable, 
                    resourceful, and committed to continuous improvement. With a passion 
                    for creativity and a strong foundation in both management and programming, 
                    I am excited to embrace new challenges in the software development field.
                </p>     
            </div>

            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;