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
        planning: file(relativePath: { eq: "work/1-finance.png" }) {
            childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wireframe: file(relativePath: { eq: "work/2-finance.png" }) {
            childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        final: file(relativePath: { eq: "work/3-finance-alt.png" }) {
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
            return <Img fluid={data.planning.childImageSharp.fluid} />;
            break;
        case 1:
            return <Img fluid={data.wireframe.childImageSharp.fluid} />;
            break;
        case 2:
            return <Img fluid={data.final.childImageSharp.fluid} style={{width: "100%"}} />;
            break;
        default:
            return <Img fluid={data.planning.childImageSharp.fluid} />;
            break;
    }
}

const styleTemp = {
    backgroundColor: "#363736",
    backgroundImage: "url(\"/images/finance.png\")",
};

const FinancePage = () => (
    <Layout>
        <SEO title="Finance UX" />
        <Case
            styleTemp={styleTemp}
            title="Finance UX"
            year="2018"
            topic="UI/UX Design"
            scope="Design a financial app UI combining a transaction management system, stock portfolio and card database."
            skills={["User Experience Design", "User Interface Design", "Wireframing"]}
            tools={["Sketch", "Omnigraffle", "Figma"]}
        >
            <article className="case">
                <h2><span>01.</span> Planning</h2>
                <p>After being exposed to and intrigued by applications like Robinhood, Paypal's Venmo and Acorn I set out to conceptualize an all-in-one portfolio, balancing and card-holding application. I first laid out the necessary functions of such a piece of software on paper. Next I consolidated these ideas into corresponding groups and imported these as objects in Omnigraffle in order to create a map of my wireframes.
                </p>
                <div className="twelve columns">
                    <Images index={0} alt="User flow for Finance UX" />
                </div>
                <h2><span>02.</span> Wireframing</h2>
                <p>This information hierarchy was then used to design the interactions between the frames and also influenced the layout of the wireframes themselves. After creating a layout I was satisfied with I took to Adobe Illustrator to whip up some icons and styles for the full-color mockup. Once I had my assets ready to drop into my layout I opened up Figma to get to work. In this version of Figma (October 2017) many fonts were unavailable so I had to reconsider my design ideas in order to utilize open source fonts instead.
                </p>
                <div className="twelve columns">
                    <Images index={1} alt="Finance UX Wireframe" />
                </div>
                <h2><span>03.</span> Result</h2>
                <p>Once I had compiled all the wireframes I took to finding ways to export and use my work. Figma's prototyping features were in their infancy and so I decided to take to Photoshop to create some mockups of this project. The end result was an interface around three central pages of a "Wallet" for cards and memberships, a "Portfolio" for shares and a "Overview" to monitor transactions. The final design features a dark interface with white and pink gradient highlights. details include a subtle logo mask behind a stock's price and tooltips for individual values.</p>
                <div className="twelve columns" style={{marginBottom: "4em"}}>
                    <Images index={2} alt="Finance UX Final Design" />
                </div>
            </article>
        </Case>
    </Layout>
)

export default FinancePage