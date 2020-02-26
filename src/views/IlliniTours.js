import React, { Component } from 'react';

import '../css/case.css';

const styleTemp = {
    backgroundColor: "#F05519",
    backgroundImage: "url(\"/images/it-1.png\")",
};

export default class IlliniTours extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - Illini Tours";
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>Illini Tours App</h2>
                    <h3>2020 &middot; Development & UI/UX</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>Illini Tours App</h2>
                        <h3>2020 &middot; Development & UI/UX</h3>
                    </div>
                </section>
                <article className="row" id="sub-header">
                    <section className="columns four">
                        <h3>Scope</h3>
                        <ul>
                            <li style={{width: "90%"}}>Design an application to introduce new students and prospective
                                students to the University of Illinois campus.
                            </li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Skills</h3>
                        <ul>
                            <li>User Interface Design</li>
                            <li>User Experience Design</li>
                            <li>Native App Development</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>Sketch</li>
                            <li>Android Studio</li>
                            <li>XCode</li>
                        </ul>
                    </section>
                </article>

                <article className="case">
                    <h2><span>01.</span> UI Design</h2>
                    <p>
                        This app, aiming to introduce students to the UIUC campus, had to be as engaging as a
                        historical tour could be. To achieve this, I decided to turn the campus wide scavenger
                        hunt into a game with progress badges, mysteries, educations and a change to take photos
                        at interesting places along the way. The final screens can be seen below. The app consists of
                        an AR portion where users can point their phone around to look for monuments and landmarks. Within this
                        augmented reality function is the ability to click for more information or take a picture at your location.
                        The next portion is a map marking user locations and the location of different landmarks, discovered and undiscovered.
                        Lastly, the progress page allows users to revisit their found landmarks and track their completion in
                        how well they know campus.
                    </p>
                    <div className="twelve columns">
                        <img loading="lazy" src="/images/it-2.png" alt="Illini Tours Screens" />
                    </div>
                    <h2><span>02.</span> Development</h2>
                    <p>
                        This application is currently in development for both iOS and Android, natively, using Android Studio/Java and XCode/Swift.
                    </p>
                </article>
            </main>
        )
    }
}
