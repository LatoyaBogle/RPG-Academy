import React, { Component } from 'react';
//import { Col, Row, Container } from "../components/Grid"; 
import {Input} from '../Forms';
import API from "../../utils/API";
//import {List, ListItem} from "../List";
import {Redirect} from 'react-router-dom';



class Test extends Component {

    state = { 
      show: false,
     users:{},
     redirect: false,
      username:"",
     password:"",
     search:"",
     searchpass:"",
     results:[]
    }

   
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
 /* componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }*/

  

    loadTest = () => {
      API.getUser()
        .then(res =>
          this.setState({ users: res.data, username:"", password:""})
        )
        .catch(err => console.log(err));
    };

    userSignin = () => {
      API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
      console.log("yep");
    }

    handleInputChange = event => {
      this.setState({ search: event.target.value })
      
      

    };

    handleFormSubmit = event => {
      event.preventDefault();
      API.getUser(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };


    setRedirect = () => {
      if (this.state.results){
        this.setState({
        redirect:true
       })
      }
     };
   
     userRedirect = () => {
       
       if (this.state.redirect) {
         return<Redirect to='/users/id'/>
       }
     }

    resetShow = evt => {
        evt.preventDefault();
        this.setState({
          show:false
        })
          
        
       };

      setShow = (show, evt) => {
    evt.preventDefault();
        

            this.setState({ show });
        
      }

      test = () => {
        
          
      
        console.log("testing input")
      }

render(){
    return (
      <div>
  
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Sign In
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      
      <h2>Display Name</h2>
          <Input   value={this.state.search}
                onChange={this.handleInputChange} 
                name="username"
                placeholder="Username (required)"
/>
          <h2>Password</h2>  
          <Input 
          value={this.state.search}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Password (required)"
/>
          

      
      </div>
      
      <div className="modal-footer">
      {this.userRedirect()}
        <button onClick={this.setRedirect} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
       
        <button onClick={this.handleFormSubmit}  type="button" className="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</div>

</div>


    )


}
}

export default Test;