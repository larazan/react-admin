import React, { Component } from 'react';
import { Link, Router, withRouter  } from "react-router-dom";
import { update, generateData, isFormValid } from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { loginAdmin } from '../../../actions/admin_actions';

import InputField from '../../utils/Form/inputfield';

class Login extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                showlabel: false,
                element: 'input',
                value: '',
                config:{
                    label: 'Email',
                    name: 'email_input',
                    id: 'email',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                showlabel: false,
                element: 'input',
                value: '',
                config: {
                    label: 'Password',
                    name: 'password_input',
                    id: 'password',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'login');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'login');
        let formIsValid = isFormValid(this.state.formdata,'login')

        if(formIsValid){
            console.log('input valid');
            
            this.props.dispatch(loginAdmin(dataToSubmit)).then(response =>{
                if(response.payload.loginDashboardSuccess){
                    console.log(response.payload);
                    this.props.history.push('/dashboard')
                }else{
                    this.setState({
                        formError: true
                    })
                }
            });

        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 mx-auto mt-5 card shadow-lg">
                        <div className="card-body p-1">
                            <h2 className="text-center text-primary mt-3">Login</h2>
                            <form noValidate onClick={(event) => this.submitForm(event)} className="white">
                                <InputField
                                    id={'email'}
                                    formdata={this.state.formdata.email}
                                    change={(element)=> this.updateForm(element)}
                                />
                                <br/>
                                <InputField
                                    id={'password'}
                                    formdata={this.state.formdata.password}
                                    change={(element)=> this.updateForm(element)}
                                />
                                { this.state.formError ? 
                                    <div className="error_label">
                                        Please check your data
                                    </div>
                                : null}
                                <p className="text-center pb-0 mt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-large btn-primary mt-2 px-5"
                                        onClick={(event) => this.submitForm(event)}
                                    >
                                        Login
                                    </button>
                                </p>
                                <p className="text-center grey-text text-darken-1">
                                Dont have account? <Link to="/register"><em>Register</em></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(Login));