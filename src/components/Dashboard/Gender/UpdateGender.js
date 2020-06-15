import React, { Component } from 'react';
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateGender } from '../../../actions/products_actions';
import { toast } from 'react-toastify';
import $ from 'jquery'; 

import 'react-toastify/dist/ReactToastify.css';

class UpdateGender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.record._id,
            name: this.props.record.name,
            errors: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.record) {
            this.setState({
                _id: nextProps.record._id,
                name: nextProps.record.name,
            })
            $('#update-modal').modal('hide');
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onUpdateHandler = e => {
        e.preventDefault();
        const newRecords = {
            _id: this.state._id,
            name: this.state.name,
        };

        let existingProps = this.props.products.gender;
        this.props.dispatch(updateGender(this.state, existingProps)).then(response=>{
            if(response.payload.success){
                console.log('success update');
                
            }
        })
    };

    render() {
        const { errors } = this.state;
        console.log(this.state);
        
        return (
            <div>
                <div className="modal fade" id="update-modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Update Gender</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onUpdateHandler} id="update-form">
                                   
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                id="name"
                                                type="text"
                                                name="name"
                                                error={errors.name}
                                                className={classnames("form-control", {
                                                    invalid: errors.name
                                                })}/>
                                            <span className="text-danger">{errors.name}</span>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    form="update-form"
                                    type="submit"
                                    className="btn btn-primary">
                                    Update Gender
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStoreToProps)(withRouter(UpdateGender));