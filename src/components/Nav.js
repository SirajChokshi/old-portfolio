import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Nav extends Component {
    state = {
        active: false
    };

    toggle = () => {
        this.setState({active: !this.state.active})
    };

    render () {
        return (
            <>
                <div className="mobile-menu show-on-mobile">
                    <h1><NavLink exact to="/"><img src="/images/profile.jpg" className="header-profile" alt="" /> Siraj Chokshi</NavLink></h1>
                    <button className={this.state.active ? "gh-svg-wrapper active" : "gh-svg-wrapper"} onClick={this.toggle} aria-label="Menu" >
                        <svg x="0px" y="0px" width="100%" viewBox="0 0 96 96" className="gh-svg gh-svg-top" enableBackground="new 0 0 96 96">
                            <rect width="32" height="4" x="32" y="46" className="gh-svg-rect gh-svg-rect-top" />
                        </svg>
                        <svg x="0px" y="0px" width="100%" viewBox="0 0 96 96" className="gh-svg gh-svg-bottom" enableBackground="new 0 0 96 96">
                            <rect width="32" height="4" x="32" y="46" className="gh-svg-rect gh-svg-rect-bottom" />
                        </svg>
                    </button>
                </div>
                <div className={this.state.active ? "mobile-pullout show-on-mobile active" : "mobile-pullout show-on-mobile"} id="pullout">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active" onClick={this.toggle} >Home</NavLink></li>
                        <li><NavLink exact to="/work" activeClassName="active" onClick={this.toggle}>Work</NavLink></li>
                        <li><NavLink exact to="/about" activeClassName="active" onClick={this.toggle}>About</NavLink></li>
                        <li><NavLink exact to="/resume" activeClassName="active" onClick={this.toggle}>Resume</NavLink></li>
                    </ul>
                </div>
                <nav className="row">
                    <div className="columns six hide-on-mobile">
                        <h1><NavLink exact to="/"><img src="/images/profile.jpg" className="header-profile" alt="" /> Siraj Chokshi</NavLink></h1>
                    </div>
                    <div className="columns six hide-on-mobile">
                        <ul>
                            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink exact to="/work" activeClassName="active">Work</NavLink></li>
                            <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                            <li><NavLink exact to="/resume" activeClassName="active">Resume</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
export default Nav;
