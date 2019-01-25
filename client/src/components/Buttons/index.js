import React from "react";
//import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function RegButton(props) {
    return(
    
        <button {...props} style={{ float: "right", marginBottom: 10 }} classNameName="btn btn-success">
      {props.children}
    </button>
    
   
    );
}

/*export function SignButton(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} classNameName="btn btn-success">
      {props.children}
    </button>

    );
}*/





export default RegButton;