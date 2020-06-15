import React, { Component } from 'react';
import { toast } from 'react-toastify';
import $ from 'jquery';

import 'react-toastify/dist/ReactToastify.css';

export default class UserAddModal extends Component {
    render() {
        return (
            <div>
            <div className="modal fade" id="update-user-modal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Update User</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                           modal body
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button
                                form="update-user"
                                type="submit"
                                className="btn btn-primary">
                                Update User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
