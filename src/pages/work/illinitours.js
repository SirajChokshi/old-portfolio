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

const ImageOne = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "work/it-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{width: "100%", marginBottom: "2em"}} />
  }

const styleTemp = {
    backgroundColor: "#F05519",
    backgroundImage: "url(\"/images/it-1.png\")",
};

const IlliniToursPage = () => (
  <Layout>
    <SEO title="Illini Tours App" />
    <Case 
        styleTemp={styleTemp}
        title="Illini Tours App"
        year="2020"
        topic="Development & UI/UX"
        scope="Design an application to introduce new students and prospective students to the University of Illinois campus."
        skills={["Native App Development", "Augmented Reality", "UI/UX Design"]}
        tools={["Swift", "Kotlin", "Sketch"]}
    >
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
               <ImageOne />
            </div>
            <h2><span>02.</span> Development</h2>
            <p>
                This application is currently in development for both iOS and Android, natively, using Android Studio/Java and XCode/Swift.
            </p>
        </article>
    </Case>
  </Layout>
)

export default IlliniToursPage
