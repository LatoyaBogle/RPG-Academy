import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
//import Nav from '../Nav';
import "../Forms/index.css";
import { DocumentProvider } from "mongoose";
import API from "../../utils/API.js";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

 class SigninForm extends Component {
   state ={
     users:[],
     username:"",
     password:""
   }

   loadSigninForm = () => {
     API.getUsers()
      .then(res =>
        this.setState({ users: res.data, username:"", password:""})
        
        )
        .catch(err => console.log(err));

   }
   test =() => {
    console.log(this.state.users);
   }
   updateUsername(value) {
    this.setState({
      username: value,
    });
  }

  updatePassword(value) {
    this.setState({
      password: value,
    });
  }

  submit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.getUser({
        username: this.state.username,
        password: this.state.password
       
      })
        .then(res => this.loadSigninForm(res))
        .catch(err => console.log(err));
    }
    // ... use email and acceptedTerms in an ajax request or similar ...
  }

  render(){
    return (
     
      <div className="container">
      <div className="top-container">
        <form action="#">
          <div className="row">
            <h2 style={{textAlign:"center"}}>..</h2>
            <div className="vl">
              <span className="vl-innertext">or</span>
            </div>
            <div className="col">
              <a href="#" className="fb btn">
                <i className="fa fa-facebook fa-fw"></i> Login with Facebook
              </a>
              <a href="#" className="twitter btn">
                <i className="fa fa-twitter fa-fw"></i> Login with Twitter
              </a>
              <a href="#" className="google btn">
                <i className="fa fa-google fa-fw"></i> Login with Google+
              </a>
            </div>
            <div className="col">
              <div className="hide-md-lg">
                <p>Or sign in manually:</p>
              </div>

              <input type="text" name="username" placeholder="Username" required value={this.state.username} onChange={(event) => {this.updateUsername(event.target.value)}}/>
              <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={(event) => {this.updatePassword(event.target.value)}}/>
              <input type="submit" value="Login" onClick={() => {this.submit()}}/>
            </div>
          </div>
        </form>
      </div>
      <div className="bottom-container">
        <div className="row">
          <div className="col">
            <a href="" style={{color:"white"}} className="btn">Sign up</a>
          </div>
          <div className="col">
            <a href="#" style={{color:"white"}} className="btn">Forgot password?</a>
          </div>
        </div>
      </div>
      </div>
    )
}
}

export default SigninForm;


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      acceptedTerms: false,
      email: '',
    };
  }

  updateCheckbox(checked) {
    this.setState({
      acceptedTerms: checked,
    });
  }

  updateEmail(value) {
    this.setState({
      email: value,
    });
  }

  submit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.getUser({
        username: this.state.username,
        password: this.state.password
       
      })
        .then(res => this.loadRegister())
        .catch(err => console.log(err));
    }
    // ... use email and acceptedTerms in an ajax request or similar ...
  }
  render(){
    return(
      <form>
      <input
        type="email"
        onChange={(event) => {this.updateEmail(event.target.value)}}
        value={this.state.email}
      />
      <input
          type="checkbox"
          checked={this.state.acceptedTerms}
          onChange={(event) => {this.updateCheckbox(event.target.checked)}}
        />
      <button onClick={() => {this.submit()}}>Submit</button>
    </form>
    )

    
  }
}

function UserProfile(props) {
  return (
    <div className="user-profile">
      <img src={props.userProfile.picture} />
      <p>{props.userProfile.name}</p>
    </div>
  );
}
