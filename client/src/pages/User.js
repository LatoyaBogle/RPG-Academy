import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class User extends Component {

  state = {
    users: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.users.username} User html {this.state.users.password}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Player POE info</h1>
              <Col size="sm">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
              </Col>
              <Col size="sm">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
              </Col>
            </article>
            <Col size="md">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
              </Col>
              <Col size="md">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
              </Col>
              
          </Col>
         
         
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
