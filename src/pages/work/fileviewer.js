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

const Images = ({index, alt}) => {
    const data = useStaticQuery(graphql`
      query {
        mockup: file(relativePath: { eq: "work/files_1.png" }) {
            childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        design: file(relativePath: { eq: "work/files_4.png" }) {
            childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    switch(index) {
        case 0:
            return <Img fluid={data.mockup.childImageSharp.fluid} />;
            break;
        case 1:
            return <Img fluid={data.design.childImageSharp.fluid} />;
            break;
        default:
            return <Img fluid={data.mockup.childImageSharp.fluid} />;
            break;
    }
}

const styleTemp = {
    backgroundColor: "#4c2872",
    backgroundImage: "url(\"/images/files.png\")",
};

const FinancePage = () => (
    <Layout>
        <SEO title="iOS File Manager" />
        <Case
            styleTemp={styleTemp}
            title="iOS File Manager"
            year="2018"
            topic="UI/UX Design"
            scope="Design a landing screen for an accessible and functional file manager using Apple Human-Interface Guidelines for iOS devices"
            skills={["User Interface Design", "User Experience Design", "Brand Guidelines"]}
            tools={["Sketch", "Illustrator", "Apple Human-Interface Guidelines"]}
        >
            <article className="case">
                <h2><span>01.</span> Final Design</h2>
                <div className="twelve columns">
                    <Images index={0} alt="Final Mockup for iOS File Viewer" />
                </div>
                <h2><span>02.</span> Features</h2>
                <div className='row'>
                    <div className="eight columns">
                        <ul>
                            <li>Storage selector allowing for users to immediately sort through their data at the highest level</li>
                            <li>Brief overview of the complete system based on user input</li>
                            <li>Filterable, live display that dynamically adapts to user queries such as file name or media type</li>
                            <li>Menu to access further tools and configurations within the applications</li>
                            <li>Search feature allowing for quick parsing of various types of data on a users device</li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <Images index={1} alt="Finance UX Wireframe" />
                    </div>
                </div>
            </article>
        </Case>
    </Layout>
)

export default FinancePage