import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authAdmin } from '../actions/admin_actions';
// import CircularProgress from '@material-ui/core/CircularProgress';

export default function(ComposedClass,reload,adminRoute = null){
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }

        componentDidMount(){
            this.props.dispatch(authAdmin()).then(response =>{
                let admin = this.props.admin.adminData;

                if(!admin.isAuth){
                    if(reload){
                        this.props.history.push('/login')
                    }
                } else{
                    if(adminRoute && !admin.isAdmin){
                        this.props.history.push('/dashboard')
                    } else{
                        if(reload === false){
                            this.props.history.push('/dashboard')
                        }
                    }
                }
                this.setState({loading:false})
            })
        }


        render() {
            if(this.state.loading){
                return (
                    <div className="main_loader">
                        <span>Loading...........</span>
                    </div>
                )
            }
            return (
               <ComposedClass {...this.props} user={this.props.user}/>
            );
        }
    }

    function mapStateToProps(state){
        return {
            admin: state.admin
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}


