import React, { Component } from 'react';

import '../css/case.css';

const styleTemp = {
    backgroundColor: "#3d5afe",
    backgroundImage: "url(\"/images/test5.png\")",
};

export default class StartupMatch extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - StartupMatch";
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>StartupMatch</h2>
                    <h3>2019 &middot; Design & Frontend Dev</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>StartupMatch</h2>
                        <h3>2019 &middot; Design & Frontend Dev</h3>
                    </div>
                </section>
                <article className="row" id="sub-header">
                    <section className="columns four">
                        <h3>Scope</h3>
                        <ul>
                            <li style={{width: "90%"}}>Design and develop a job board web application for startups at the
                                University of Illinois at Urbana-Champaign.
                            </li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Skills</h3>
                        <ul>
                            <li>Frontend Development</li>
                            <li>User Experience Design</li>
                            <li>User Research</li>
                            <li>Leadership</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>React.JS</li>
                            <li>Sketch</li>
                            <li>Illustrator</li>
                            <li>Git</li>
                        </ul>
                    </section>
                </article>

                <article className="case">
                    <h2><span>01.</span> Planning</h2>
                    <div className="row">
                        <div className="twelve columns">
                            <h3>Users and Research</h3>
                            <p>
                                <a href="https://founders.illinois.edu" className="box-link" target="_blank" rel="noreferrer noopener">Founders</a> aims to promote startup creation, funding and growth within the University of Illinois Urbana-Champaign.
                                At the request of many of its supported startups Founder's is making a job board for UIUC students to gain experience
                                working in both their field and in a startup environment. The primary function of the job board is to allow <a href="https://entrepreneurship.illinois.edu/startups/" className="box-link" target="_blank" rel="noreferrer noopener">UIUC
                                startups</a> to post job listings and allow students of the university to find and apply to relevant positions.

                            </p><br /><p>Due to these core actions being integral
                                to the purpose of the job board, I decided that two completely seperate user flows, and therefore user experiences, with necessary within the same
                                interface. The first one for the startups to maintain listings, search for students and update their company's profile and the other for students
                                to hunt for positions, go through with applying to said positions and update their personal profiles for startup's to view. Pictured below is the user flow
                                for the startup's posting jobs and filtering through applications.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src="/images/jobboard-userflow.png" alt="Job Board User flow" className="columns twelve"/>
                    </div>
                    <div className="row">
                        <div className="twelve columns">
                            <h3>Architecture</h3>
                            <p>
                                From the aforementioned user flow, in addition to a general list of required documentation pages, a list of necessary webpages
                                was created for the application. This list was subsequently visualized into a sitemap with paths that connect
                                intended user flows and likely paths of interactions. In addition to the paths each page has been placed into a category based
                                on its purposed. The left part of the map, beneath the reference pages, represents webpages accessible by a student or applicant, while the opposite side is for the startups.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <img src="/images/jobboard-sitemap.png" alt="Job Board Sitemap" className="columns twelve"/>
                    </div>
                    <h2><span>02.</span> Prototyping</h2>
                    <p>
                        After defining what the user experience of the web app will need to encompass, I moved forward with prototyping
                        components of the job board itself with paper wireframes in order to quickly compare options for layouts and interactions.
                        Below are wireframes of a navigation bar, card for job listings, icons, individual page layouts and their mobile equivalents.
                    </p>
                    <div className="row">
                        <img src="/images/jobboard-wireframe-1.jpg" alt="Job Board Wireframes 1" className="columns four"/>
                        <img src="/images/jobboard-wireframe-2.jpg" alt="Job Board Wireframes 2" className="columns four"/>
                        <img src="/images/jobboard-wireframe-3.jpg" alt="Job Board Wireframes 3" className="columns four"/>
                    </div>
                    <p>
                        Lastly, before making high-fidelity mockups, I developed a visual style guide for components within the application
                        to have uniform branding. This stylesheet can be seen below.
                    </p>
                    <div className="row">
                        <img src="/images/job-board-styles.png" alt="Job Board Visual Style Sheet" className="columns twelve"/>
                    </div>
                    <h2><span>02.</span> Final Design</h2>
                        <div className="row">
                            <img src="/images/startupmatch/jobs.png" alt="Job Board Final 1" className="columns six"/>
                            <img src="/images/startupmatch/login.png" alt="Job Board Final 2" className="columns six"/>
                        </div>
                        <div className="row">
                            <img src="/images/startupmatch/newlisting.png" alt="Job Board Final 3" className="columns six"/>
                            <img src="/images/startupmatch/settings.png" alt="Job Board Final 4" className="columns six"/>
                        </div>
                    <h2><span>03.</span> Development</h2>
                    <div className="row">
                        <p>The final design was implemented using React.JS with Redux. The user interface was designed with a
                        component system in mind from the wireframe stage so the translation into a frontend interface using
                        a JavaScript framework was a natural one. The content is fed from a mySQL GCP database through a Django
                        REST API backend.</p>
                    </div>
                </article>
            </main>
        )
    }
}
