import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid"; 
import friend from '../app.json';
//import './pages.css';
import {Redirect} from 'react-router-dom';
import Carousel from "../components/Carousel";
import NavMain from "../components/Nav";
import Headerbar from "../components/Header";









class Home extends Component {


  state = {
    friend,
    users: [],
    search:"",
    ascension: "",
    style: "",
    redirect: false,
    username:"",
    password:""
  };

  componentDidMount() {
    this.loadHome();
    this.test();
  }

  loadHome = () => {
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
        .then(res => this.loadHome())
        .catch(err => console.log(err));
    }
  };


  setRedirect = () => {
   this.setState({
     redirect:true
    })
  };

  regisRedirect = () => {
    if (this.state.redirect) {
      return<Redirect to='/registration'/>
    }
  }
  
  test = () => {
    console.log("shut!!!")
  }    
 
  render() {
      return (
        <Container>
          <Row>
            <Col size="lg">
              <NavMain/>
            </Col>
          </Row>
          <Row>
            <Col size="lg">
              <Headerbar/>
            </Col>
          </Row>
          <Row>
            <Col size="md">
              <Carousel/>
              
            </Col>
          </Row>
        </Container>
      );
  }
}

  
  
export default Home;
  
  