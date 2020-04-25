import React from "react"

import '../styles/skeleton.css';
import '../styles/main.css';

import ProjectCard from "../components/ProjectCard";
import Layout from "../components/layout";
import SEO from "../components/seo";

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <h2 className="work-header">Projects</h2>
    <article id="work-grid">
    <div className="row">
        <div className="six columns">
            <ProjectCard
                projectID="illinitours"
                projectName="Illini Tours"
                projectYear="2020"
                projectCategory={"UI/UX Design"}
                projectDesc="An application built to introduce new and prospective students to the UIUC campus."
            />
        </div>
        <div className="six columns">
            <ProjectCard
                className="one-half column"
                projectID="startupmatch"
                projectName="StartupMatch"
                projectYear="2019"
                projectCategory={"Design & Frontend Dev"}
                projectDesc="A case study on the design and development of creating a job board at the University of Illinois at Urbana-Champaign."
            />
        </div>
    </div>
    <div className="row">
        <div className="six columns">
        <ProjectCard
            projectID="fileviewer"
            projectName="iOS File Manager"
            projectYear="2018"
            projectCategory={"UI/UX Design"}
            projectDesc="Detail-orientated and user-focused splash screen for an iOS file viewer with
                        light and dark theme versions."
        />
        </div>
        <div className="six columns">
        <ProjectCard
            projectID="finance"
            projectName="Finance UX"
            projectYear="2018"
            projectCategory={"UI/UX Design"}
            projectDesc="A concept for a financial app design combining a transaction management system, stock
                            portfolio and card database."
        />
        </div>
    </div>
    <div className="row">
        <div className="six columns">
        <ProjectCard
            projectID="music"
            projectName="Music Streaming UI"
            projectYear="2017"
            projectCategory={"UI/UX Design"}
            projectDesc="A user interface design for a music streaming service."
        />
        </div>
    </div>
    </article>
  </Layout>
)

export default WorkPage
