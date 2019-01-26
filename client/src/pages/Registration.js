import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid"; 
import {Input, FormBtn} from"../components/Forms";
import './pages.css';
import API from "../utils/API.js";
import { Link } from "react-router-dom";

//**current taking in userInput and saving, route needs to be created for user page */
class Register extends Component {

  state = {
    users:[],
    username:"",
    password:""
  }

  loadRegister = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, username:"", password:""})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.saveUser({
        username: this.state.username,
        password: this.state.password
       
      })
        .then(res => this.loadRegister())
        .catch(err => console.log(err));
    }
  };
  
  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md">
        <div>
        
            <h1>Registration form</h1>
       
          <h2>Display Name</h2>
          <Input value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
/>
          <h2>Email Adress</h2>
          <Input  />
          <h2>Password</h2>
          <Input value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)" />
          <FormBtn disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
>Submit</FormBtn> 
<Link to="/">← Back to Home</Link>
        </div>
        </Col>
        
      </Row>
      </Container>
    )
  }

}

export default Register;

//<Route exact path="/registration" component={Register} /> 


