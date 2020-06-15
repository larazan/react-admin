import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


import Register from "./components/auth/Register";
import Login from './components/auth/Login';
import Dashboard from './components/pages/Dashbord';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper';

import Users from "./components/pages/Users";
import Admins from "./components/pages/Admins";
import Products from "./components/pages/Products";
import TesPage from "./components/pages/TesPage";

import Test from './Test';

class App extends Component {

  render () {
    return (
      
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Test} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/users" component={Users}></Route>
              <Route exact path="/admins" component={Admins}></Route>
              <Route exact path="/products" component={Products}></Route>
              <Route exact path="/tes" component={TesPage}></Route>
            </Switch>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;