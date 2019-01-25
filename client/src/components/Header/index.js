import React from "react";
import "../Header/index.css";
import logo from "../../images/test.png";


export function Headerbar (){
    return(
        <div className="header">
            <a href="#default" className="logo"><img src={logo} alt="logo" style={{width:90, height:37}}/></a>
            <div className="subnav">
                <button className="subnavbtn"><img src={logo} alt="path-icon" style={{width:90, height:80}}/><i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <div className="header">
                        <h2>Courses</h2>
                    </div>
                </div>
            </div>
            <div className="subnav">
                <button className="subnavbtn"><img src={logo} alt="path-icon" style={{width:80, height:80}}/><i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <a href="#bring">...</a>
                    <a href="#deliver">...</a>
                    <a href="#package">...</a>
                    <a href="#express">...</a>
                </div>
            </div> 
            <div className="subnav">
                <button className="subnavbtn"><img src={logo} alt="path-icon" style={{width:80, height:80}}/><i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <a href="#link1">...</a>
                    <a href="#link2">...</a>
                    <a href="#link3">...</a>
                    <a href="#link4">...</a>
                </div>
            </div>
    
   
        </div>
    )
};

export default  Headerbar;