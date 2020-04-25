import React from "react"
import { Link, graphql } from "gatsby"

import '../styles/skeleton.css';
import '../styles/main.css';

import ProjectCard from "../components/ProjectCard";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleCard from "../components/ArticleCard";

// temp input for IndexPage: {data: {allMarkdownRemark: { edges },},}

const IndexPage = () => {
    // const Posts = edges
    //     .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    //     .slice(0,3)
    //     .map(edge => (
    //         <div className="three columns">
    //             <ArticleCard
    //                 key={edge.node.id}
    //                 post={edge.node.frontmatter}
    //             />
    //         </div>
    //     ))

    return (
        <Layout>
            <SEO title={"escape"} />
            <p id="bio">
                Hi, I’m Siraj. I’m a <a href="https://sirajchokshi.github.io" className="box-link" target="_blank" rel="noreferrer noopener">software engineer</a> and <Link to="/work" className="box-link">UX designer</Link>, studying Cognitive
                Neuroscience, Computer Science,
                and Behavior at <a href="https://illinois.edu" className="box-link" target="_blank" rel='noreferrer noopener'>UIUC</a>.
            </p>
            <article className="row" id="sub-header">
                <section className="one-half column">
                    <h2 id="positions-title">Lately</h2>
                    <ul id="positions">
                        <li>Software Engineering Intern @ <a href="https://abbvie.com" target="_blank" rel='noreferrer noopener' className="box-link">AbbVie</a></li>
                        <li>Product Designer @ <a href="https://uiuc.hack4impact.org" target="_blank" rel='noreferrer noopener' className="box-link">Hack4Impact</a></li>
                        <li>Software Developer @ <a href="http://founders.illinois.edu" target="_blank" rel='noreferrer noopener' className="box-link">Founders</a></li>
                        <li>Research Intern @ <a href="https://geneticsofdesign.com" target="_blank" rel='noreferrer noopener' className="box-link">GeneticsOfDesign.com</a></li>
                    </ul>
                </section>
                <section className="one-half column">
                    <h2 id="socials-title">Reach me</h2>
                    <ul id="socials">
                        <li><a href="mailto:sirajsc2@illinois.edu" target="_blank" rel='noreferrer noopener' ><i className="fas fa-paper-plane" />&nbsp; sirajsc2@illinois.edu</a></li>
                        <li><a href="https://github.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-github" />&nbsp; GitHub</a></li>
                        <li><a href="https://linkedin.com/in/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-linkedin" />&nbsp; LinkedIn </a></li>
                        <li><a href="https://dribbble.com/sirajchokshi" target="_blank" rel='noreferrer noopener' ><i className="fab fa-dribbble" />&nbsp; Dribbble</a></li>
                    </ul>
                </section>
            </article>
            <article id="work-grid">
                <h2 className="work-header">Projects</h2>
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
                <Link to="/work" className="view-more">View All Projects</Link>
            </article>
            {/* <article>
                <h2 className="work-header" style={{marginTop: "2vh"}}>Writing</h2>
                <div className="row posts-row">
                    {Posts}
                    <Link className="three columns view-more" to="/blog">View All Posts</Link>
                </div>
            </article> */}
        </Layout>
    )
}

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             path
//             title
//             abstract
//             tags
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
