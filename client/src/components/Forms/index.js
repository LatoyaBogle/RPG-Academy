import React from "react";
import { Col, Row, Container } from "../Grid";
//import Nav from '../Nav';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div classNameName="form-group">
      <input classNameName="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div classNameName="form-group">
      <textarea classNameName="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} classNameName="btn btn-success">
      {props.children}
    </button>
  );
}

 export function SignIn() {
  return (
    <Container fluid>
      <Row>
        <Col size="md">
        <div>
        <h2>Display Name</h2>
          <Input />
          <h2>Password</h2>  
          <Input />

    
          
        
         
          
        </div>
        </Col>
      </Row>
      </Container>
  )
}

export default SignIn;
