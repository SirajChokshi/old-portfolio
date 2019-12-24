import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
// Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark as bookmarkActive, faUser as userActive, faSearch as search, faCaretDown as darr, faFolderOpen as jobsActive, faCommentAlt as logoActive, faSignInAlt as login, faBars as menu, faCog as settings, faCogs as settingsActive, faSignOutAlt as signoutIcon } from '@fortawesome/free-solid-svg-icons'
// import { faBookmark as bookmark, faUser as user, faFolderOpen as jobs, faCommentAlt as logo } from '@fortawesome/free-regular-svg-icons'

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
                    <h1><NavLink exact to="/"><img src="https://i.imgur.com/trdF8yX.jpg" className="header-profile" alt="" /> Siraj Chokshi</NavLink></h1>
                    <button className={this.state.active ? "gh-svg-wrapper active" : "gh-svg-wrapper"} onClick={this.toggle} >
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
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink exact to="/work" activeClassName="active">Work</NavLink></li>
                        <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink exact to="/resume" activeClassName="active">Resume</NavLink></li>
                    </ul>
                </div>
                <nav className="row">
                    <div className="columns six hide-on-mobile">
                        <h1><NavLink exact to="/"><img src="https://i.imgur.com/trdF8yX.jpg" className="header-profile" alt="" /> Siraj Chokshi</NavLink></h1>
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
