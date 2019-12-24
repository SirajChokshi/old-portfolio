import React, { Component } from 'react';

import ProjectCard from "../components/ProjectCard";

export default class Work extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - Work";
    }

    render () {
        return (
            <>
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
                </article>
            </>
        )
    }
}
