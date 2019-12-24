import React, { Component } from 'react';

import { Redirect, Link } from 'react-router-dom';

import '../css/case.css';

export default class CatchError extends Component {
    state = {

    };

    componentDidMount() {
        document.title = "Siraj Chokshi - 404";
    }

    render () {
        return (
            <main>
                <Redirect to="/" />
                <h1 style={{fontSize: "60px", marginTop: "2em", marginBottom: "10px"}}>Error 404 - Not Found</h1>
                <p style={{fontSize: "24px"}}><Link to="/">Click here if not automatically redirected.</Link></p>
            </main>
        )
    }
}
