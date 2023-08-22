import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './home.scss';
import LogoTitle from '../../assets/images/logo-b.png';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Logo from './Logo/logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timerId);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _12`}>'m</span>
                <span className={`${letterClass} _12`}></span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={'rent'.split('')}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={'a web and software developer'.split('')}
                idx={8} />
                </h1>
                <h2>Full Stack</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;