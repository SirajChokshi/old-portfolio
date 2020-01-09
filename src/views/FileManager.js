import React, { Component } from 'react';

import '../css/case.css';

const styleTemp = {
    backgroundColor: "#4c2872",
    backgroundImage: "url(\"/images/files.png\")",
};

export default class FileManager extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - File Manager";
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <main>
                <section className="project-header-card mobile" style={styleTemp} />
                <div className="info mobile">
                    <h2>iOS File Manager</h2>
                    <h3>2018 &middot; UI/UX Design</h3>
                </div>
                <section className="project-header-card" style={styleTemp}>
                    <div className="info">
                        <h2>iOS File Manager</h2>
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
                            <li>Brand Guidelines</li>
                        </ul>
                    </section>
                    <section className="columns four">
                        <h3>Tools</h3>
                        <ul>
                            <li>Sketch</li>
                            <li>Illustrator</li>
                            <li>Apple Human-Interface Guidelines</li>
                        </ul>
                    </section>
                </article>

                <article className="case">
                    <h2><span>01.</span> Final Design</h2>
                    <div className="row">
                        <div className="twelve columns">
                            <img src="/images/files_1.png" alt="" />
                        </div>
                    </div>
                    <h2><span>02.</span> Features</h2>
                    <div className="row">

                           <ul className="columns eight">
                               <li>Storage selector allowing for users to immediately sort through their data at the highest level</li>
                               <li>Brief overview of the complete system based on user input</li>
                               <li>Filterable, live display that dynamically adapts to user queries such as file name or media type</li>
                               <li>Menu to access further tools and configurations within the applications</li>
                               <li>Search feature allowing for quick parsing of various types of data on a users device</li>
                           </ul>
                        <div className="columns four">
                            <img src="/images/files_4.png" style={{margin: "0", marginTop: "15px"}} alt="" />
                        </div>
                    </div>
                </article>
            </main>
        )
    }
}
