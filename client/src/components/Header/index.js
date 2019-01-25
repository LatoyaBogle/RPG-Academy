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
                    <div className="subnav-two">
                        <button className="subnavbtn-two">Noob 101 <i className="fa fa-caret-down"></i></button>
                        <div className="subnav-content-two">
                            <a href="#company">WHOOT!!</a>
                            <a href="#team">WHOOT!!!</a>
                            <a href="#careers">WHOOT!!</a>
                        </div>
                    </div> 
                    <div className="subnav-two">
                        <button className="subnavbtn-two"><img src={logo} alt="path-icon" style={{width:80, height:80}}/><i className="fa fa-caret-down"></i></button>
                        <div className="subnav-content-two">
                            <a href="#bring">HELLYEAH!!!</a>
                            <a href="#deliver">HELLYEAH!!!</a>
                            <a href="#package">HELLYEAH!!!</a>
                            <a href="#express">HELLYEAH!!!</a>
                        </div>
                    </div> 
                    <div className="subnav-two">
                        <button className="subnavbtn-two"><img src={logo} alt="path-icon" style={{width:80, height:80}}/><i className="fa fa-caret-down"></i></button>
                        <div className="subnav-content-two">
                        <a href="#link1">SEXY!!!</a>
                        <a href="#link2">SEXY!!!</a>
                        <a href="#link3">SEXY!!!</a>
                        <a href="#link4">SEXY!!!</a>
                    </div>
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
    
    <a href="#contact">Contact</a>
   
    </div>
        )
    };

export default  Headerbar;