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
        planning: file(relativePath: { eq: "work/music/planning.png" }) {
            childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wireframe: file(relativePath: { eq: "work/music/wireframe.png" }) {
            childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        final: file(relativePath: { eq: "work/music/final.png" }) {
            childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile: file(relativePath: { eq: "work/music/mobile.png" }) {
            childImageSharp {
            fluid(maxWidth: 1000) {
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
        case 4:
            return <Img fluid={data.mobile.childImageSharp.fluid} imgStyle={{marginTop: 0}} />;
            break;
        default:
            return <Img fluid={data.planning.childImageSharp.fluid} />;
            break;
    }
  }

const styleTemp = {
    backgroundColor: "#44C1BB",
    backgroundImage: "url(\"/images/music.png\")",
};

const MusicPage = () => (
  <Layout>
    <SEO title="Music Streaming UI" />
    <Case 
        styleTemp={styleTemp}
        title="Music Streaming UI"
        year="2017"
        topic="UI/UX Design"
        scope="Design a human-centered user interface for a music streaming mobile application."
        skills={["User Experience Design", "User Interface Design", "Prototyping", "Visual Design"]}
        tools={["Figma", "Balsamiq", "Photoshop"]}
    >
        <article className="case">
            <h2><span>01.</span> Planning</h2>
            <p>I started out by looking through several popular music playing services (i.e; Spotify,
                Deezer and Apple Music). I then noted what I liked or disliked about said services and
                created guidelines towards what was necessary in the UI of music streaming applications.
                I aimed to make my interface intuitive, easy to use and comfortable to operate. My first
                plans were sketched with pen on paper and I then moved to Balsamiq for some low-fi mockups.
            </p>
            <h2><span>02.</span> Design</h2>
            <p>In Balsamiq I consolidated my many drafts into one uniform design system. When creating low-fi
                mockups and wireframes I put the majority of my focus on the layout of elements as well as their
                size. After being satisfied by the mockups I had created in Balsamiq I started to plan out the
                final design. I used the low-fi mockups as references to create a fully featured interface in
                Figma. At this stage, after creating some icons in Illustrator, I decided to use a dark theme
                as the focus for music streaming is the music and not the visuals. I also created an accent
                gradient in a teal color to compliment the interface's dark UI.
            </p>
            <div className="row">
                <div className="six columns">
                    <Images index={0} alt="Music UI Paper Prototype" />
                    </div>
                <div  className="six columns">
                    <Images index={1} alt="Music UI Wireframe" />
                </div>
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
                <div className="one-half column" >
                    <Images index={2} alt="Music UI Final Design" />
                </div>
                <div className="one-half column" >
                    <img src="/images/vid.gif" alt="Music UI Final Animation" style={{marginBottom: 0}} />
                </div>
            </div>
            <div className="twelve columns" style={{marginBottom: "4em"}}>
                <Images index={4} alt="Music UI on Mobile Mockups" />
            </div>
        </article>
    </Case>
  </Layout>
)

export default MusicPage
