import React from 'react';

import { animateScroll as scroll } from 'react-scroll';

const Footer = () => (
        <footer>
            <div className="row">
                <div className="column one-half left-footer-sec">
                    <button id="back-to-top" onClick={scroll.scrollToTop} >&uarr; Back to top</button>
                </div>
                <ul id="footer-socials" className="column one-half">
                    <li><a href="mailto:sirajsc2@illinois.edu" aria-label="Email Me" ><i className="fas fa-paper-plane" />&nbsp;<span
                        id="email-writeout"> sirajsc2@illinois.edu</span></a></li>
                    <li><a href="https://linkedin.com/in/sirajchokshi" aria-label="LinkedIn" ><i className="fab fa-linkedin" />&nbsp;</a>
                    </li>
                    <li><a href="https://dribbble.com/sirajchokshi" aria-label="Dribbble" ><i className="fab fa-dribbble" />&nbsp;</a>
                    </li>
                    <li><a href="https://github.com/sirajchokshi" aria-label="Github" ><i className="fab fa-github" />&nbsp;</a></li>
                    <li><a href="https://twitter.com/sirajchokshi" aria-label="Twitter" ><i className="fab fa-twitter" />&nbsp;</a></li>
                </ul>
            </div>
            <p id="copy">&copy; Copyright 2020 Siraj Chokshi.<br className="show-on-mobile" /> <a href="https://archive.sirajchokshi.com">View Archive</a></p>
        </footer>
    )

export default Footer