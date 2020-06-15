import React, { Component } from 'react';
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerAdmin, getAdmins } from '../../../actions/admin_actions';
import { toast } from 'react-toastify';
import $ from 'jquery';

class AddAdmin extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: '',
            password: '',
            password2: '',
            errors: {},
        };
    }

    componentDidMount() {
        this.props.dispatch(getAdmins())        
     }

    componentWillReceiveProps(nextProps) {
        if(nextProps) {
            $('#add-modal').modal('hide');
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onAdminAdd = e => {
        e.preventDefault();
       
        let existingAdmin = this.props.admin.adminList;
        this.props.dispatch(registerAdmin(this.state, existingAdmin)).then((response) => {
            if(response.payload.success){
                console.log('submit success');
            }
        })
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="modal fade" id="add-modal" data-reset="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Admin</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onAdminAdd} id="add-form">
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                // value={this.state.name}
                                                id="name"
                                                type="text"
                                                placeholder="name" 
                                                name="name" 
                                                onChange={this.onChange}
                                                
                                                className={classnames("form-control", {
                                                   
                                                })}/>
                                            {/* <span className="text-danger">{errors.name}</span> */}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Email</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                // value={this.state.name}
                                                id="email"
                                                type="text"
                                                placeholder="email" 
                                                name="email" 
                                                onChange={this.onChange}
                                                
                                                className={classnames("form-control", {
                                                   
                                                })}/>
                                            {/* <span className="text-danger">{errors.name}</span> */}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Password</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                // value={this.state.name}
                                                id="password"
                                                type="password"
                                                placeholder="password" 
                                                name="password" 
                                                onChange={this.onChange}
                                                
                                                className={classnames("form-control", {
                                                   
                                                })}/>
                                            {/* <span className="text-danger">{errors.name}</span> */}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Confirm Password</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                // value={this.state.name}
                                                id="password"
                                                type="password"
                                                placeholder="confirm password" 
                                                name="password" 
                                                onChange={this.onChange}
                                                
                                                className={classnames("form-control", {
                                                   
                                                })}/>
                                            {/* <span className="text-danger">{errors.name}</span> */}
                                        </div>
                                    </div>
                                   
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    form="add-form"
                                    type="submit"
                                    className="btn btn-primary">
                                    Add Admin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin 
    }
}

export default connect(mapStateToProps)(withRouter(AddAdmin));