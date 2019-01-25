import React from "react";
import "../Cards/index.css";
import test from "../../images/test.png";

export function Itemcard(){
    return(
        <div className="card-group">
            <div className="card" >
                <img src={test} className="card-img-top" alt="..." style={{verticalAlign: "middle",width: 50, height: 50, borderRadius: "50%"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
                
      
    )
}


export function ClassCard(){
    return(

        <div class="card">
            <img src={{test}} alt="class-card" style={{width:"100%"}}/>
            <h1>Class</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <a href="#"><i class="fa fa-dribbble"></i></a> 
            <a href="#"><i class="fa fa-twitter"></i></a> 
            <a href="#"><i class="fa fa-linkedin"></i></a> 
            <a href="#"><i class="fa fa-facebook"></i></a> 
            <p><button>Contact</button></p>
        </div>
    )
}