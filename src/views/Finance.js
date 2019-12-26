import React, { Component } from 'react';

import '../css/case.css';

const styleTemp = {
    backgroundColor: "rgba(40, 40, 40, 0.95)",
    backgroundImage: "url(\"/images/finance.png\")",
};

export default class Finance extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - Finance UX";
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>Finance UX</h2>
                    <h3>2018 &middot; UI/UX Design</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>Finance UX</h2>
                        <h3>2018 &middot; UI/UX Design</h3>
                    </div>
                </section>
                <article className="row" id="sub-header">
                    <section className="columns four">
                        <h3>Scope</h3>
                        <ul>
                            <li style={{width: "90%"}}>Design a landing screen for an accessible and functional file
                                manager using Apple Human-Interface Guidelines for iOS devices
                            </li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Skills</h3>
                        <ul>
                            <li>User Interface Design</li>
                            <li>User Experience Design</li>
                            <li>Wireframing</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>Sketch</li>
                            <li>Figma</li>
                            <li>Omnigraffle</li>
                        </ul>
                    </section>
                </article>

                <article className="case">
                    <h2><span>01.</span> Planning</h2>
                            <p>After being exposed to and intrigued by applications like Robinhood, Paypal's
                                Venmo and Acorn I set out to conceptualize an all-in-one portfolio, balancing
                                and card-holding application. I first laid out the necessary functions of such
                                a piece of software on paper. Next I consolidated these ideas into corresponding
                                groups and imported these as objects in Omnigraffle in order to create a map of
                                my wireframes.
                            </p>
                    <div className="twelve columns">
                        <img src="/images/1-finance.png" alt="" />
                    </div>
                    <h2><span>02.</span> Wireframing</h2>
                    <p>This information hierarchy was then used to design the interactions between the frames and
                        also influenced the layout of the wireframes themselves. After creating a layout I was
                        satisfied with I took to Adobe Illustrator to whip up some icons and styles for the full-color
                        mockup. Once I had my assets ready to drop into my layout I opened up Figma to get to work. In
                        this version of Figma (October 2017) many fonts were unavailable so I had to reconsider my design
                        ideas in order to utilize open source fonts instead.
                    </p>
                    <div className="twelve columns">
                        <img src="/images/2-finance.png" alt="" />
                    </div>
                    <h2><span>03.</span> Design</h2>
                    <p>Once I had compiled all the wireframes I took to finding ways to export and use my work.
                        Figma's prototyping features were in their infancy and so I decided to take to Photoshop
                        to create some mockups of this project. The end result was an interface around three central
                        pages of a "Wallet" for cards and memberships, a "Portfolio" for shares and a "Dashboard" to
                        monitor transactions. The final design features a dark interface with white and pink gradient
                        highlights. details include a subtle logo mask behind a stock's price and tooltips for individual
                        values.</p>
                </article>
            </main>
        )
    }
}
