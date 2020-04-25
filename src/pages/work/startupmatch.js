import React from "react"

import '../../styles/skeleton.css';
import '../../styles/main.css';
import '../../styles/about.css';
import '../../styles/case.css';

import Layout from "../../components/layout";
import Case from "../../components/case";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo";

const Images = ({index}) => {
    const data = useStaticQuery(graphql`
      query {
        userflow: file(relativePath: { eq: "work/startupmatch/jobboard-userflow.png" }) {
            childImageSharp {
            fluid(maxWidth: 1350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sitemap: file(relativePath: { eq: "work/startupmatch/jobboard-sitemap.png" }) {
            childImageSharp {
            fluid(maxWidth: 1350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wireframeOne: file(relativePath: { eq: "work/startupmatch/jobboard-wireframe-1.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wireframeTwo: file(relativePath: { eq: "work/startupmatch/jobboard-wireframe-2.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wireframeThree: file(relativePath: { eq: "work/startupmatch/jobboard-wireframe-3.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        styles: file(relativePath: { eq: "work/startupmatch/job-board-styles.png" }) {
            childImageSharp {
            fluid(maxWidth: 1350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jobs: file(relativePath: { eq: "work/startupmatch/jobs.png" }) {
            childImageSharp {
            fluid(maxWidth: 675) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        login: file(relativePath: { eq: "work/startupmatch/login.png" }) {
            childImageSharp {
            fluid(maxWidth: 675) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        newlisting: file(relativePath: { eq: "work/startupmatch/newlisting.png" }) {
            childImageSharp {
            fluid(maxWidth: 675) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        settings: file(relativePath: { eq: "work/startupmatch/settings.png" }) {
            childImageSharp {
            fluid(maxWidth: 675) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    
    switch(index) {
        case 0:
            return <Img fluid={data.userflow.childImageSharp.fluid} alt="Job Board User flow" className="columns twelve" />;
        case 1:
            return <Img fluid={data.sitemap.childImageSharp.fluid} alt="Job Board Sitemap" className="columns twelve"/>;
        case 2:
            return <Img fluid={data.wireframeOne.childImageSharp.fluid}  alt="Job Board Wireframes 1" className="columns four"/>;
        case 3:
          return <Img fluid={data.wireframeTwo.childImageSharp.fluid}  alt="Job Board Wireframes 2" className="columns four"/>;
        case 4:
          return <Img fluid={data.wireframeThree.childImageSharp.fluid}  alt="Job Board Wireframes 3" className="columns four"/>;
        case 5:
          return <Img fluid={data.styles.childImageSharp.fluid}  alt="Job Board Visual Style Guide" className="columns twelve"/>;
        case 6:
          return (
            <>
              <div className="row">
                  <Img fluid={data.jobs.childImageSharp.fluid}  alt="Job Board Final 1" className="columns six"/>
                  <Img fluid={data.login.childImageSharp.fluid}  alt="Job Board Final 2" className="columns six"/>
              </div>
              <div className="row">
                  <Img fluid={data.newlisting.childImageSharp.fluid}  alt="Job Board Final 3" className="columns six"/>
                  <Img fluid={data.settings.childImageSharp.fluid}  alt="Job Board Final 4" className="columns six"/>
              </div>
            </>
          )
        default:
            return <Img fluid={data.planning.childImageSharp.fluid} />;
    }
  }

const styleTemp = {
  backgroundColor: "#3d5afe",
  backgroundImage: "url(\"/images/test5.png\")",
};

const StartupMatchPage = () => (
  <Layout>
    <SEO title="StartupMatch" />
    <Case 
        styleTemp={styleTemp}
        title="StartupMatch"
        year="2019"
        topic="Frontend Dev & UI/UX"
        scope="Design and develop a job board web application for startups at the University of Illinois at Urbana-Champaign."
        skills={["Frontend Development", "Software Architecture", "Progressive Web Apps", "User Research"]}
        tools={["React.JS", "Django REST", "Sketch", "Git"]}
    >
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
                                to the purpose of the job board, I decided that two completely separate user flows, and therefore user experiences, with necessary within the same
                                interface. The first one for the startups to maintain listings, search for students and update their company's profile and the other for students
                                to hunt for positions, go through with applying to said positions and update their personal profiles for startup's to view. Pictured below is the user flow
                                for the startup's posting jobs and filtering through applications.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <Images index={0} />
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
                      <Images index={1} />
                    </div>
                    <h2><span>02.</span> Prototyping</h2>
                    <p>
                        After defining what the user experience of the web app will need to encompass, I moved forward with prototyping
                        components of the job board itself with paper wireframes in order to quickly compare options for layouts and interactions.
                        Below are wireframes of a navigation bar, card for job listings, icons, individual page layouts and their mobile equivalents.
                    </p>
                    <div className="row" style={{marginBottom: "2em"}}>
                      <Images index={2} />
                      <Images index={3} />
                      <Images index={4} />
                    </div>
                    <p>
                        Lastly, before making high-fidelity mockups, I developed a visual style guide for components within the application
                        to have uniform branding. This stylesheet can be seen below.
                    </p>
                    <div className="row">
                        <Images index={5} />
                    </div>
                    <h2><span>02.</span> Final Design</h2>
                        <Images index={6} />
                    <h2><span>03.</span> Development</h2>
                    <div className="row">
                        <p>The final design was implemented using React.JS with Redux. The user interface was designed with a
                        component system in mind from the wireframe stage so the translation into a frontend interface using
                        a JavaScript framework was a natural one. The content is fed from a mySQL GCP database through a Django
                        REST API backend.</p>
                    </div>
                </article>
    </Case>
  </Layout>
)

export default StartupMatchPage
