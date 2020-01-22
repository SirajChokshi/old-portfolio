import React, { Component } from 'react';

import '../css/case.css';

const styleTemp = {
    backgroundColor: "#44C1BB",
    backgroundImage: "url(\"/images/music.png\")",
};

export default class Music extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - Music Streaming UI";
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>Music Streaming UI</h2>
                    <h3>2017 &middot; UI/UX Design</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>Music Streaming UI</h2>
                        <h3>2017 &middot; UI/UX Design</h3>
                    </div>
                </section>
                <article className="row" id="sub-header">
                    <section className="columns four">
                        <h3>Scope</h3>
                        <ul>
                            <li style={{width: "90%"}}>Design a human-centered user interface for a music streaming
                                mobile application.
                            </li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Skills</h3>
                        <ul>
                            <li>User Interface Design</li>
                            <li>User Experience Design</li>
                            <li>Rapid Prototyping</li>
                            <li>Visual Design</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>Figma</li>
                            <li>Balsalmiq</li>
                            <li>Photoshop</li>
                        </ul>
                    </section>
                </article>

                <article className="case">
                    <h2><span>01.</span> Planning</h2>
                            <p>I started out by looking through several popular music playing services (i.e; Spotify,
                                Deezer and Apple Music). I then noted what I liked or disliked about said services and
                                created guidelines towards what was necessary in the UI of music streaming applications.
                                I aimed to make my interface intuitive, easy to use and comfortable to operate. My first
                                plans were sketched with pen on paper and I then moved to Balsamiq for some low-fi mockups.
                            </p>
                    <div className="twelve columns">
                        <img loading="lazy" src="/images/music/planning.png" alt="Music UI Paper Prototype" />
                    </div>
                    <h2><span>02.</span> Design</h2>
                    <p>In Balsamiq I consolidated my many drafts into one uniform design system. When creating low-fi
                        mockups and wireframes I put the majority of my focus on the layout of elements as well as their
                        size. After being satisfied by the mockups I had created in Balsamiq I started to plan out the
                        final design. I used the low-fi mockups as references to create a fully featured interface in
                        Figma. At this stage, after creating some icons in Illustrator, I decided to use a dark theme
                        as the focus for music streaming is the music and not the visuals. I also created an accent
                        gradient in a teal color to compliment the interface's dark UI.
                    </p>
                    <div className="twelve columns">
                        <img loading="lazy" src="/images/music/wireframe.png" alt="Music UI Wireframe" />
                    </div>
                    <h2><span>03.</span> Result</h2>
                    <p>Once I had exported my final screens from Figma I created a Photoshop mockup with a basic
                        interaction. The design features a dark interface with a teal gradient accent and offers
                        a search feature, menu, music player and database. Design choices were made in order
                        to create a convenient user experience such as a right aligned play button on album
                        and artist pages for the majority of users who are right-handed. Users can
                        follow artists, click expanded menus on songs, see an artist's most played songs,
                        view their time in a song with the bottom progress bar and more.</p>
                    <div className="row">
                        <div className="one-half column" ><img loading="lazy" src="/images/music/final.png" alt="Music UI Final Design" /></div>
                        <div className="one-half column" ><img loading="lazy" src="/images/music/vid.gif" style={{width: "100%"}} className="one-half column" alt="Music UI Final Animation" /></div>
                    </div>
                    <div className="twelve columns">
                        <img loading="lazy" src="/images/music/mobile.png" alt="Music Final Mobile UI" />
                    </div>
                </article>
            </main>
        )
    }
}
