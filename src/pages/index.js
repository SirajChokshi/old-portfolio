import React from "react"
import { graphql, Link } from "gatsby"

import "normalize.css"
import "../root.css"
import "../global.css"
import "../about.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkCard from "../components/WorkCard"
import PROJECTS from "../PROJECTS"
import ArticleCard from "../components/ArticleCard"
import { CssVarsPonyfill } from "css-vars-ponyfill-react"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  CssVarsPonyfill()
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className={"page-title"}>Hi, I'm Siraj.</h2>
      <p className={"box-all"} id={"bio"}>
        I’m a software engineer and designer from Boston, MA studying at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          data-link-color="uiuc"
          href="https://illinois.edu"
        >
          UIUC
        </a>
        .<br />
        Incoming software engineering intern at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com"
          data-link-color="linkedin"
        >
          LinkedIn
        </a>
        .
        <br />
        Product design for non-profits at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          data-link-color="h4i"
          href="https://uiuc.hack4impact.org"
        >
          Hack4Impact
        </a>
        .<br />
        Formerly, a startup,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          data-link-color="linkedin"
          href="https://abbvie.com"
        >
          AbbVie
        </a>
        , and research at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/UIUCLearningLanguageLab"
        >
          Learning and Language Lab
        </a>
        .
      </p>
      <ul className="social box-all">
        <li>
          <a href="/resume.pdf" target={"_blank"} rel="noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SirajChokshi"
            target={"_blank"}
            rel="noreferrer"
            data-link-color="github"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/sirajchokshi"
            target={"_blank"}
            rel="noreferrer"
            data-link-color="linkedin"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/sirajchokshi"
            target={"_blank"}
            rel="noreferrer"
            data-link-color="twitter"
          >
            Twitter
          </a>
        </li>
      </ul>
      <h3>Projects</h3>
      <div className="grid-wrapper">
        {PROJECTS.slice(0, 4).map(p => (
          <WorkCard
            key={"card_" + p.name}
            name={p.name}
            year={p.year}
            desc={p.desc}
            tags={p.tags}
            repo={p.repo}
            demo={p.demo}
            read={p.read}
          />
        ))}
      </div>
      <Link to={"/projects"} className={"project-link arrow-link"}>
        View All Projects
      </Link>
      <h3>Writing</h3>
      <span>
        {edges
          .slice(0, 3)
          .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
          .map(edge => {
            return (
              <ArticleCard key={edge.node.id} post={edge.node.frontmatter} />
            )
          })}
      </span>
      <Link to={"/blog"} className={"project-link arrow-link"}>
        View All Posts
      </Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            abstract
            tags
          }
        }
      }
    }
  }
`
