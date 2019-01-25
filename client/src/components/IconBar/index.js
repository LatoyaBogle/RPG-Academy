import React from "react";
import "../IconBar/index.css";

export function IconBar (){
    return(
        <div className="navbar">
  <a className="active" href="#"><i class="fa fa-home"></i></a> 
  <a href="#"><i class="fa fa-search"></i></a> 
  <a href="#"><i class="fa fa-envelope"></i></a> 
  <a href="#"><i class="fa fa-globe"></i></a>
  <a href="#"><i class="fa fa-trash"></i></a> 
</div>
    )
};

export default  IconBar;