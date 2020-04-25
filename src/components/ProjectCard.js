import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const ProjectCard = ({projectID, projectName, projectYear, projectCategory, projectDesc}) => (
    <section id={projectID} className="project-card">
        <Link to={"/work/" + projectID} className="cover-link" aria-label={projectName} />
        <div className="info">
            <h2>{projectName}</h2>
            <h3>{projectYear} &middot; {projectCategory}</h3>
            <p>
                {projectDesc}
            </p>
            <Link to={"/work/" + projectID} className="button"><span>Read More &rarr;</span></Link>
        </div>
    </section>
)

ProjectCard.propTypes = {
    projectID: PropTypes.string,
    projectName: PropTypes.string,
    projectYear: PropTypes.string,
    projectCategory: PropTypes.string,
    projectDesc: PropTypes.string
}
  
ProjectCard.defaultProps = {
    projectID: ``,
    projectName: ``,
    projectYear: ``,
    projectCategory: ``,
    projectDesc: ``,
}

export default ProjectCard;