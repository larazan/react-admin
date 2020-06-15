import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="d-flex" id="wrapper">
                <Sidebar/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;