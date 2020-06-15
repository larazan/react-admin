import React, { Component } from 'react';
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addGender, getGenders } from '../../../actions/products_actions';
import { toast } from 'react-toastify';
import $ from 'jquery';

class AddGender extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            errors: {},
        };
    }

    componentDidMount() {
        this.props.dispatch(getGenders())        
     }

    componentWillReceiveProps(nextProps) {
        if(nextProps) {
            $('#add-modal').modal('hide');
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onAddHandler = e => {
        e.preventDefault();
       
        let existingProps = this.props.products.gender;
        this.props.dispatch(addGender(this.state, existingProps)).then((response) => {
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
                                <h4 className="modal-title">Add Gender</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onAddHandler} id="add-form">
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                // value={this.state.name}
                                                id="name"
                                                type="text"
                                                placeholder="gender" 
                                                name="name" 
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
                                    Add Gender
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

export default connect(mapStoreToProps)(withRouter(AddGender));