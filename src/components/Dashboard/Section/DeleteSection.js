import React, { Component } from 'react';
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSection } from '../../../actions/products_actions';
import { toast } from 'react-toastify';
import $ from 'jquery';

class DeleteSection extends Component {
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
                name: this.props.record.name,
            })
            $('#delete-modal').modal('hide');
        }
    }

    onDeleteHandler = e => {
        e.preventDefault();
        
        this.props.dispatch(deleteSection({_id: this.props.record._id})).then(response=>{
            if(response.payload.success){
                console.log('success delete');
                
            }
        })
    };

    render() {
        const { errors } = this.state;
        console.log(this.state);

        return (
            <div>
                <div className="modal fade" id="delete-modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Section</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onDeleteHandler} id="delete-form">
                                          
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>Are you sure to delete this {this.props.record.name} section?</h5>
                                        </div>
                                        
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    form="delete-form"
                                    type="submit"
                                    className="btn btn-danger">
                                    Delete Section
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

export default connect(mapStoreToProps)(DeleteSection);