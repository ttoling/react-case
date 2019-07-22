import React,{Component} from 'react';
import '../assets/css/base.css';
import '../library/font';
import {Switch,Route,Redirect} from 'react-router-dom';

import Home from "../pages/Home";
import Classify from "../pages/Classify";
import Find from "../pages/Find";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import MyCart from "../pages/MyCart";
import User from "../pages/User";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Footer from "./Footer";

export default class App extends Component{
  componentWillReceiveProps(nextprops){
  }
  render(){
    return(
        <div className="App">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/find" component={Find}/>
            <Route path="/login" component={Login}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/mycart" component={MyCart}/>
            <Route path="/user" component={User}/>
            <Route path="/detail" component={Detail}/>
            <Redirect exact from="/" to="/home"/>
            <Route component={ErrorPage}/>
          </Switch>
          <Footer/>

        </div>
    )
  }
}
