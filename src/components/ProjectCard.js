import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class ProjectCard extends Component {
    state = {

    };

    render () {
        return (
            <section id={this.props.projectID} className="project-card">
                <Link to={"/work/" + this.props.projectID} className="cover-link" aria-label={this.props.projectName} />
                <div className="info">
                    <h2>{this.props.projectName}</h2>
                    <h3>{this.props.projectYear} &middot; {this.props.projectCategory}</h3>
                    <p>
                        {this.props.projectDesc}
                    </p>
                    <Link to={"/work/" + this.props.projectID} className="button"><span>Read More &rarr;</span></Link>
                </div>
            </section>
        )
    }
}