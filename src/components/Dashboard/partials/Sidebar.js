import React, { Component } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Sidebar extends Component {

    render() {

        const links = [
            {
                name: 'Dashboard',
                linkTo: '/dashboard'
            },
            {
                name: 'Users',
                linkTo: '/dashboard/users'
            },
            {
                name: 'Admins',
                linkTo: '/dashboard/admins'
            },
            {
                name: 'Products',
                linkTo: '/dashboard/products'
            },
            {
                name: 'Brands',
                linkTo: '/dashboard/brands'
            },
            {
                name: 'Categories',
                linkTo: '/dashboard/categories'
            },
            {
                name: 'Infos',
                linkTo: '/dashboard/infos'
            },
            {
                name: 'Genders',
                linkTo: '/dashboard/genders'
            },
            {
                name: 'Sections',
                linkTo: '/dashboard/sections'
            }
        ]

        const generateLinks = (links) => (
            links.map((item,i) => (
                <Link to={item.linkTo} key={i} className="list-group-item list-group-item-action">{item.name}</Link>
            ))
        )

        return (
            <div className="border-right h-100" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    { generateLinks(links) }
                </div>
            </div>
        );
    }
}


export default connect()(Sidebar);
