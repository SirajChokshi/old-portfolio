/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { animateScroll as scroll } from 'react-scroll';

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div id={"container"}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className="footer-grid">
            <p><span className={"wrap-p"}>© Copyright {new Date().getFullYear()} Siraj Chokshi. <span>Can't find something? <a href={"https://archive.sirajchokshi.com"}>Check the archive</a>.</span></span></p>
          <ul className="social box-all">
            <li><a href="/resume.pdf" target={"_blank"} rel="noreferrer">Resume</a></li>
            <li><a href="https://github.com/SirajChokshi" target={"_blank"} rel="noreferrer" data-link-color="github">Github</a>
            </li>
            <li><a href="https://linkedin.com/in/sirajchokshi" target={"_blank"} rel="noreferrer"
                   data-link-color="linkedin">Linkedin</a></li>
            <li><a href="https://twitter.com/sirajchokshi" target={"_blank"} rel="noreferrer"
                   data-link-color="twitter">Twitter</a></li>
          </ul>
          </div>
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
