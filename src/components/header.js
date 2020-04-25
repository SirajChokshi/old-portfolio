import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="header-profile" />
}

function Header({ siteTitle }) {
  const [active, toggle] = useState(false);

  return (
    <>
      <div className="mobile-menu show-on-mobile">
          <h1><Link to="/"><Image /> Siraj Chokshi</Link></h1>
          <button className={active ? "gh-svg-wrapper active" : "gh-svg-wrapper"} onClick={() => toggle(!active)} aria-label="Menu" >
              <svg x="0px" y="0px" width="100%" viewBox="0 0 96 96" className="gh-svg gh-svg-top" enableBackground="new 0 0 96 96">
                  <rect width="32" height="4" x="32" y="46" className="gh-svg-rect gh-svg-rect-top" />
              </svg>
              <svg x="0px" y="0px" width="100%" viewBox="0 0 96 96" className="gh-svg gh-svg-bottom" enableBackground="new 0 0 96 96">
                  <rect width="32" height="4" x="32" y="46" className="gh-svg-rect gh-svg-rect-bottom" />
              </svg>
          </button>
      </div>
      <div className={active ? "mobile-pullout show-on-mobile active" : "mobile-pullout show-on-mobile"} id="pullout">
          <ul>
              <li><Link to="/" activeClassName="active" onClick={() => toggle(false)} >Home</Link></li>
              <li><Link to="/work" activeClassName="active" onClick={() => toggle(false)}>Work</Link></li>
              <li><Link to="/about" activeClassName="active" onClick={() => toggle(false)}>About</Link></li>
              <li><Link to="/resume" activeClassName="active" onClick={() => toggle(false)}>Resume</Link></li>
          </ul>
      </div>
      <nav className="row">
          <div className="columns six hide-on-mobile">
              <h1><Link to="/"><Image /> Siraj Chokshi</Link></h1>
          </div>
          <div className="columns six hide-on-mobile">
              <ul>
                  <li><Link to="/" activeClassName="active">Home</Link></li>
                  <li><Link to="/work" activeClassName="active">Work</Link></li>
                  <li><Link to="/about" activeClassName="active">About</Link></li>
                  <li><Link to="/resume" activeClassName="active">Resume</Link></li>
                  {/*} <li><Link to="/blog" activeClassName="active">Blog</Link></li> {*/}
              </ul>
          </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
