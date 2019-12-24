import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../css/case.css';
import '../css/about.css';

export default class About extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - About";
    }

    render () {
        return (
            <main>
                <h2 id="work-header">About</h2>
                <article className="case row">
                    <img src="http://via.placeholder.com/400x530" alt="headshot" className="columns four" style={{margin: "0 auto"}} />
                        <div className="columns eight" id="about-page-bio">
                            <p>
                                <strong>Hi, I'm Siraj.</strong><br /> I am a user experience designer with foundations
                                in user research, visual design and frontend development. I am enrolled at the University
                                of Illinois at Urbana-Champaign where I am pursuing a bachelors degree in Cognitive Science
                                and minoring in Art + Design. My coursework is centered around human factors, ergonomics,
                                programming and design. I am currently designing and developing solutions for the UIUC
                                startup community at <a href="http://founders.illinois.edu" target="_blank" rel='noreferrer noopener' className="box-link">
                                Founders<i style={{fontSize: "1rem", marginLeft: "5px"}} className="fas fa-external-link-alt" /></a>.
                                <br /><br />
                                <strong>Interested in working together?</strong><br />
                                Feel free to check out <Link to="/resume" className="box-link">my resume</Link> or reach
                                out to me at <a href="mailto:sirajsc2@illinois.edu" className="box-link">sirajsc2@illinois.edu</a>.
                                <br /><br />
                                <strong>Find me elsewhere</strong>
                            </p>

                            <div className="row" id="about-socials">
                                <section className="column one-half">
                                    <ul>
                                        <li><a href="mailto:sirajsc2@illinois.edu" target="_blank" rel='noreferrer noopener' ><i className="fas fa-paper-plane" />&nbsp; sirajsc2@illinois.edu</a></li>
                                        <li><a href="https://linkedin.com/in/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-linkedin" />&nbsp; LinkedIn </a></li>
                                        <li><a href="https://dribbble.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-dribbble" />&nbsp; Dribbble</a></li>
                                    </ul>
                                </section>
                                <section className="column one-half">
                                    <ul>
                                        <li><a href="tel:1-978-760-8276" target="_blank" rel='noreferrer noopener' ><i className="fas fa-phone-square-alt" />&nbsp; +1 (978) 760-8276 </a></li>
                                        <li><a href="https://github.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-github" />&nbsp; GitHub</a></li>
                                        <li><a href="https://twitter.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-twitter" />&nbsp; Twitter </a></li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                </article>
            </main>
        )
    }
}
