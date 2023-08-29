import './certificates.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

const Certificates = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timerId)
    }, [])

    return (
        <div className="container certificates-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={'My Certificates'.split('')}
                    idx={15} />
                </h1>
            </div>
            <div className="certificates">
                <div className="certificate">
                    <h2></h2>
                    <img src="Images\JavaScript Algorithms and Data Structures Certification.jpg" alt="" />
                </div>
                <div className="certificate">
                    <h2></h2>
                    <img src="Images\Scientific Computing with Python Certiificate.jpg" alt="" />
                </div>
                <div className="certificate">
                    <h2></h2>
                    <img src="Images\Responsifve Web Design Certificate.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Certificates;