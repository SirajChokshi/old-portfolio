import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";

export default class Home extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi";
    }

    render () {
        return (
            <main>
                <p id="bio">
                    Hi, I’m Siraj. I’m a <Link to="/work" className="box-link">UX designer</Link> and <a
                    href="https://sirajchokshi.github.io" className="box-link" target="_blank" rel="noreferrer noopener">frontend developer</a>, studying Cognitive
                    Psychology, Computer Science
                    and Design at <a href="https://illinois.edu" className="box-link" target="_blank" rel='noreferrer noopener'>UIUC</a>.
                    {/*Check out my <Link to="/resume" className="box-link">resume</Link> or <Link to="/work" className="box-link">work</Link>.*/}
                </p>

                <article className="row" id="sub-header">
                    <section className="one-half column">
                        <h2 id="positions-title">Lately</h2>
                        <ul id="positions">
                            <li>UI/UX Designer @ <a href="http://founders.illinois.edu" target="_blank" rel='noreferrer noopener' className="box-link">Founders</a></li>
                            <li>Research Intern @ <a href="https://geneticsofdesign.com" target="_blank" rel='noreferrer noopener' className="box-link">GeneticsOfDesign.com</a></li>
                            <li>Digital Design Intern @ Koh for Congress</li>
                            <li>Designer @ <a href="http://mwcoc.com" target="_blank" rel='noreferrer noopener' className="box-link">MWCOC</a></li>
                        </ul>
                    </section>
                    <section className="one-half column">
                        <h2 id="socials-title">Reach me</h2>
                        <ul id="socials">
                            <li><a href="mailto:sirajsc2@illinois.edu" target="_blank" rel='noreferrer noopener' ><i className="fas fa-paper-plane" />&nbsp; sirajsc2@illinois.edu</a></li>
                            <li><a href="https://dribbble.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-dribbble" />&nbsp; Dribbble</a></li>
                            <li><a href="https://github.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-github" />&nbsp; GitHub</a></li>
                            <li><a href="https://linkedin.com/in/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-linkedin" />&nbsp; LinkedIn </a></li>
                        </ul>
                    </section>
                </article>
                <h2 id="work-header">Select Works</h2>
                <article>
                    <ProjectCard
                        projectID="startupmatch"
                        projectName="StartupMatch"
                        projectYear="2019"
                        projectCategory={"Design & Frontend Dev"}
                        projectDesc="A case study on the user research, interaction design and frontend development
                                    processes of creating a job board for startups developed by Founders at the University of
                                    Illinois at Urbana-Champaign."
                    />
                    <ProjectCard
                        projectID="fileviewer"
                        projectName="iOS File Manager"
                        projectYear="2018"
                        projectCategory={"UI/UX Design"}
                        projectDesc="Detail-orientated and user-focused splash screen for an iOS file viewer with
                                    light and dark theme versions."
                    />
                    <ProjectCard
                        projectID="finance"
                        projectName="Finance UX"
                        projectYear="2018"
                        projectCategory={"UI/UX Design"}
                        projectDesc="A concept for a financial app design combining a transaction management system, stock
                                     portfolio and card database."
                    />

                    <Link to="/work" id="view-more">View All</Link>
                </article>
            </main>
        )
    }
}
