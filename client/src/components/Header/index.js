import React from "react";
import "../Header/index.css";
import logo from "../../images/test.png";
import Tab from "../Tabs/index.js";


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
                    <Tab/>
                </div>
            </div>
            <div className="subnav">
                <button className="subnavbtn"><img src={logo} alt="path-icon" style={{width:80, height:80}}/><i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <div className="header">
                        <h2>Courses</h2>
                    </div>
                </div>
            </div> 
            <div className="subnav">
                <button className="subnavbtn"><img src={logo} alt="path-icon" style={{width:80, height:80}}/><i className="fa fa-caret-down"></i></button>
                <div className="subnav-content">
                    <div className="header">
                            <h2>Courses</h2>
                    </div>
                </div>
            </div>
    
   
        </div>
    )
};

export default  Headerbar;