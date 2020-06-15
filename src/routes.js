import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthAdmin from './hoc/authAdmin';

// DASHBOARD ADMIN
import Layout from './components/Dashboard/layout';
import Register from "./components/Dashboard/auth/Register";
import Login from './components/Dashboard/auth/Login';
import Dashboard from './components/Dashboard/Dashbord';

// DASHBOARD PAGES
import Admins from "./components/Dashboard/Admin";
// DASHBOARD USER
import Users from "./components/Dashboard/User";
// DASHBOARD PRODUCT
import Products from "./components/Dashboard/Product";
// DASHBOARD CATEGORY
import Categories from './components/Dashboard/Category';
// DASHBOARD BRAND
import Brands from './components/Dashboard/Brand';
// DASHBOARD SECTION
import Sections from './components/Dashboard/Section';
// DASHBOARD GENDER
import Genders from './components/Dashboard/Gender';
// DASHBOARD INFO
import Infos from './components/Dashboard/Infos';


import TesPage from "./components/pages/TesPage";
import Form from './components/pages/Form';
import Cat from './components/pages/Cat';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper';


import Test from './Test';
import FormLayout from './components/pages/FormLayout';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';

// import Layout from './hoc/layout';


// import Home from './components/Home';
// import RegisterLogin from './components/Register_login';
// import Register from './components/Register_login/register';
// import Shop from './components/Shop';
// import ProductPage from './components/Product';

// import UserDashboard from './components/User';
// import AddProduct from './components/User/Admin/add_product';
// import ManageCategories from './components/User/Admin/manage_categories';

const Routes = () => {
  return(
    // <Layout>
    //   <Switch>
    //     <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)}/>
    //     <Route path="/admin/add_product" exact component={Auth(AddProduct,true)}/>
    //     <Route path="/admin/manage_categories" exact component={Auth(ManageCategories,true)}/>

    //     <Route path="/product_detail/:id" exact component={Auth(ProductPage,null)}/>
    //     <Route path="/register" exact component={Auth(Register,false)}/>
    //     <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/>
    //     <Route path="/shop" exact component={Auth(Shop,null)}/>
    //     <Route path="/" exact component={Auth(Home,null)}/>
    //   </Switch>
    // </Layout>
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/form" component={FormLayout}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/cat" component={Cat}></Route>
            <Route exact path="/tes" component={TesPage}></Route>
            <Layout>
              <Switch>
                <Route exact path="/dashboard" component={AuthAdmin(Dashboard, true)} />
                <Route exact path="/dashboard/users" component={AuthAdmin(Users, true)} />
                <Route exact path="/dashboard/admins" component={AuthAdmin(Admins, true)} />
                <Route exact path="/dashboard/products" component={AuthAdmin(Products, true)} />
                <Route path="/dashboard/categories" component={AuthAdmin(Categories, true)} />
                <Route path="/dashboard/brands" component={AuthAdmin(Brands, true)} />
                <Route path="/dashboard/genders" component={AuthAdmin(Genders, true)} />
                <Route path="/dashboard/sections" component={AuthAdmin(Sections, true)} />
                <Route path="/dashboard/infos" component={AuthAdmin(Infos, true)} />

              </Switch>
            </Layout>  
          </Switch>
        </div>
      </Router>
  )
}

export default Routes;
