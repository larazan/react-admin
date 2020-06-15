import React, { Component } from 'react';
import { Link, Router, withRouter  } from "react-router-dom";
import InputField from '../../utils/Form/inputfield';
import { update, generateData, isFormValid } from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { registerAdmin } from '../../../actions/admin_actions';

class Register extends Component {
    state = {
        formError: false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name',
                    label: 'Name',
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true,
            },
            lastname: {
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname',
                    label: 'Lastname',
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true,
            },
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email',
                    label: 'Email',
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true,
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password',
                    label: 'Password',
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true,
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config:{
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm your password',
                    label: 'Confirm password',
                },
                validation:{
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true,
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            this.props.dispatch(registerAdmin(dataToSubmit))
            .then(response =>{ 
                if(response.payload.success){
                    this.setState({
                        formError: false,
                        formSuccess: true
                    });
                    setTimeout(()=>{
                        this.props.history.push('/register');
                    },3000)
                } else {
                    this.setState({formError: true})
                }
            }).catch(e => {
                this.setState({formError: true})
            })
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
                    <div className="col-md-6 mx-auto mt-5 card shadow-lg">
                        <div className="card-body p-1">
                        
                            <Link to="/" className="btn-flat waves-effect">
                                <i className="material-icons left"></i> Back to
                                home
                            </Link>
                            
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <h2 className="text-center text-primary mt-3"><b>Register</b></h2>
                                <p className="text-center grey-text text-darken-1">
                                    Already have an account? <Link to="/login"><em>Log in</em></Link>
                                </p>
                            </div>
                            <form noValidate onSubmit={(event)=>  this.submitForm(event)} className="form-horizontal white">
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <InputField
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <InputField
                                            id={'email'}
                                            formdata={this.state.formdata.email}
                                            change={(element)=> this.updateForm(element)}
                                        />  
                                    </div>       
                                </div>    
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <InputField
                                            id={'password'}
                                            formdata={this.state.formdata.password}
                                            change={(element)=> this.updateForm(element)}
                                        />  
                                    </div>      
                                </div>               
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <InputField
                                            id={'confirmPassword'}
                                            formdata={this.state.formdata.confirmPassword}
                                            change={(element)=> this.updateForm(element)}
                                        />     
                                    </div>
                                </div>  
                                
                                <p className="text-center pb-0 mt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-large btn-primary mt-2 px-5"
                                        onSubmit={(event)=>  this.submitForm(event)}
                                    >
                                        Sign up
                                    </button>
                                </p>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Register);