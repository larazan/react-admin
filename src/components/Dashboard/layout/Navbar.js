import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
// import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

import { logoutAdmin } from "../../../actions/admin_actions";


class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.dispatch(logoutAdmin()).then(response => {
            if(response.payload.success){
                this.props.history.push('/')
            }
        })
        // this.props.logoutUser();
    };

    componentDidMount() {
        console.log(this.props.admin);
        
    }

    render() {
        // const { user } = this.props.auth;
        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">Brand</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="settings"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                </a>
                                <div className="dropdown-menu" aria-labelledby="settings">
                                    <a className="dropdown-item" href="#" onClick={this.onLogoutClick}>Logout</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.onLogoutClick}>Logout (Ratri) <FontAwesomeIcon icon={faSignOutAlt} /> </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin 
    }
}

export default connect(mapStateToProps)(withRouter(Navbar));
