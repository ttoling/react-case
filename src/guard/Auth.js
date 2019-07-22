import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import User from '../components/User';
import axios from 'axios';
class Auth extends React.Component{
  constructor(){
    super();
    this.state={
      hasAuth:false,
      auth:false,
    };
    axios({
      url:"/data/user.json"
    }).then(
        res=>{
          setTimeout(()=>{
            this.setState({hasAuth:true,auth:res.data.auth})
            console.log(res.data.auth)
          },2000)
        }
    )
  }
  render(){
    if(!this.state.hasAuth) return null;
    let el = null;
    if(this.state.auth){
      el = <Route path="/user" component={User}/>
    }else{
      el = <Redirect to="/login"/>
    }
    return el
  }
}
export default Auth;
