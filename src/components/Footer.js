import React, { Component } from 'react';

import { animateScroll as scroll } from 'react-scroll';

export default class Footer extends Component {
    state = {

    };

    render () {
        return (
            <footer>
                <div className="row">
                    <div className="column one-half left-footer-sec">
                        <button onClick={scroll.scrollToTop} id="back-to-top">&uarr; Back to top</button>
                    </div>
                    <ul id="footer-socials" className="column one-half">
                        <li><a href="mailto:sirajsc2@illinois.edu"><i className="fas fa-paper-plane" />&nbsp;<span
                            id="email-writeout"> sirajsc2@illinois.edu</span></a></li>
                        <li><a href="https://linkedin.com/in/sirajchokshi"><i className="fab fa-linkedin" />&nbsp;</a>
                        </li>
                        <li><a href="https://dribbble.com/sirajchokshi"><i className="fab fa-dribbble" />&nbsp;</a>
                        </li>
                        <li><a href="https://github.com/sirajchokshi"><i className="fab fa-github" />&nbsp;</a></li>
                        <li><a href="https://twitter.com/sirajchokshi"><i className="fab fa-twitter" />&nbsp;</a></li>
                    </ul>
                </div>
                <p id="copy">&copy; Copyright 2019 Siraj Chokshi.<br className="show-on-mobile" /> <a href="https://archive.sirajchokshi.com">View Archive</a></p>
            </footer>
        )
    }
}
