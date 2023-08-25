import React, { useEffect, useState } from 'react';
import './portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timerId);
    }, []);


    return (
        <div className="container portfolio-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={'My Portfolio'.split('')}
                        idx={15}
                    />
                </h1>
                <p>
                    Here is some of the work I've done.
                </p>
            </div>
            <div className="portfolios">
                    <div className="portfolio-item">
                        <div className="image">
                            <img src="\Images\Restaurant Website.jpg" alt="" />
                        </div>
                        <div className="hover-items">
                            <h2>Site/Code</h2>
                            <div className="icons">
                                <a href="https://jbpryor.github.io/Restaurant-Website/" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faLink} />
                                </a>
                                <a href="https://github.com/Jbpryor/Restaurant-Website" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src="Images\Product Landing Page.jpg" alt="" />
                        </div>
                        <div className="hover-items">
                            <h2>Site/Code</h2>
                            <div className="icons">
                                <a href="https://jbpryor.github.io/Product-Landing-Page-HTML-CSS/" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faLink} />
                                </a>
                                <a href="https://github.com/Jbpryor/Product-Landing-Page-HTML-CSS.git" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src="\Images\Recipe Index.jpg" alt="" />
                        </div>
                        <div className="hover-items">
                            <h2>Site/Code</h2>
                            <div className="icons">
                                <a href="https://jbpryor.github.io/Technical-Documentation-Page/" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faLink} />
                                </a>
                                <a href="https://github.com/Jbpryor/Technical-Documentation-Page" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src="\Images\Tribute Page.jpg" alt="" />
                        </div>
                        <div className="hover-items">
                            <h2>Site/Code</h2>
                            <div className="icons">
                                <a href="https://jbpryor.github.io/Tribute-Page/" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faLink} />
                                </a>
                                <a href="https://github.com/Jbpryor/Tribute-Page" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src="\Images\First Portfolio.jpg" alt="" />
                        </div>
                        <div className="hover-items">
                            <h2>Site/Code</h2>
                            <div className="icons">
                                <a href="https://jbpryor.github.io/Portfolio-Website/" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faLink} />
                                </a>
                                <a href="https://github.com/Jbpryor/Portfolio-Website" className="icon-link" title="link">
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;