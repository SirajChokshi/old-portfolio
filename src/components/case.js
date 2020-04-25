/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const Case = ({ children, styleTemp, title, year, topic, scope, tools, skills }) => {

  return (
    <>
        <section className="project-header-card mobile" style={styleTemp} />
            <div className="info mobile">
                <h2>{title}</h2>
                <h3>{year} &middot; {topic}</h3>
            </div>
            <section className="project-header-card" style={styleTemp}>
                <div className="info">
                    <h2>{title}</h2>
                    <h3>{year} &middot; {topic}</h3>
                </div>
        </section>
        <article className="row" id="sub-header">
            <section className="columns four">
                <h3>Scope</h3>
                <ul>
                    <li>
                        {scope}
                    </li>
                </ul>
            </section>
            <section className="columns four">
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </section>
            <section className="columns four">
                <h3>Tools</h3>
                <ul>
                    {tools.map((tool) => (
                        <li>{tool}</li>
                    ))}
                </ul>
            </section>
        </article>
        {children}
    </>
  )
}

Case.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Case
