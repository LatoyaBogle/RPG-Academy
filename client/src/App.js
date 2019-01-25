import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
//import Nav from './components/Nav';
import Register from './pages/Registration';
import Home from './pages/Home';
//import POE from './components/POE';
import User from './pages/User';


function App() {
  
    return (
      <Router>
      <div>
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Register} /> 
        <Route exact path="/users/id" component={User} />
        
        </Switch>
         
      </div>
      </Router>
    );

}

export default App;



