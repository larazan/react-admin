import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer} from "react-toastify";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import ReactDatatable from '@ashvin27/react-datatable';
import {connect} from "react-redux";
import { getSections } from '../../../actions/products_actions';
// modal
import AddSection from './AddSection';
import UpdateSection from './UpdateSection';
import DeleteSection from './DeleteSection';


class Section extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                key: "_id",
                text: "Id",
                className: "id",
                align: "left",
                sortable: true,
            },
            {
                key: "name",
                text: "Name",
                className: "name",
                align: "left",
                sortable: true,
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => {
                    return (
                        <Fragment>
                            <button
                                data-toggle="modal"
                                data-target="#update-modal"
                                className="btn btn-primary btn-sm"
                                onClick={() => this.editRecord(record)}
                                style={{marginRight: '5px'}}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button
                                data-toggle="modal"
                                data-target="#delete-modal"
                                className="btn btn-danger btn-sm"
                                onClick={() => this.deleteRecord(record)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    );
                }
            }
        ];

        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            filename: "Sections",
            no_data_text: 'No section found!',
            button: {
                excel: true,
                print: true,
                csv: true
            },
            language: {
                length_menu: "Show _MENU_ result per page",
                filter: "Filter in records...",
                info: "Showing _START_ to _END_ of _TOTAL_ records",
                pagination: {
                    first: "First",
                    previous: "Previous",
                    next: "Next",
                    last: "Last"
                }
            },
            show_length_menu: true,
            show_filter: true,
            show_pagination: true,
            show_info: true,
        };

        this.getData = this.getData.bind(this);
    }

    state = {
        records: [],
        currentRecord: {
            id: '',
            name: '',
        }
    }

    componentDidMount() {
        this.props.dispatch(getSections()).then(response => {
            this.setState({
                records: this.props.products.section
            })
        })
    };

    componentWillMount() {
        this.getData()
    }

    componentWillReceiveProps(nextProps) {
        this.getData()
    }

    getData() {
        axios
            .get("/api/product/sections")
            .then(res => {
                this.setState({ records: res.data})
                // console.log(res);
                // console.log(res.data);
                
            })
            .catch()
    }

    editRecord(record) {
        this.setState({ currentRecord: record});
    }

    deleteRecord(record) {
        // axios
        //     .post("/api/product/section-delete", {_id: record._id})
        //     .then(res => {
        //         if (res.status === 200) {
        //             console.log('delete success');
               
        //         }
        //     })
        //     .catch();
        // this.getData();
        this.setState({ currentRecord: record});
    }

    pageChange(pageData) {
        console.log("OnPageChange", pageData);
    }


    render() {
        console.log(this.state.currentRecord);
        
        return (
            <>
                <AddSection />
                <UpdateSection record={this.state.currentRecord} />
                <DeleteSection record={this.state.currentRecord} />
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <button className="btn btn-link mt-3" id="menu-toggle"><FontAwesomeIcon icon={faList}/></button>
                        
                        <button 
                            className="btn btn-outline-primary float-right mt-3 mr-2" 
                            data-toggle="modal" 
                            data-target="#add-modal"
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                            Add Section
                        </button>
                        
                        
                        <h1 className="mt-2 text-primary">Section List</h1>
                        <ReactDatatable
                            config={this.config}
                            records={this.state.records}
                            columns={this.columns}
                            onPageChange={this.pageChange.bind(this)}
                        />
                    </div>
                </div>
                <ToastContainer/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Section);