import React from "react";
import test from "../../images/test.png";
import ClassCard from "../Cards/index.js";



export function Tab() {
    return(
        <div className="container">    
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" ><image src={test} style={{width:131, height:90}} alt="Gen Ed"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><image src={test} style={{width:131, height:90}} alt="Noob 101"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false"><image src={test} style={{width:131, height:90}} alt="Novice"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false"><image src={test} style={{width:131, height:90}} alt="Skilled"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false"><image src={test} style={{width:131, height:90}} alt="Pro"/></a>
                </li>
            </ul>

            <div className="tab-content" style={{backgroundColor:"#2426298c"}}>
                <div className="tab-pane" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <nav id="scroll-cards">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">The World</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Game Mechanics</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Exiles</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Equipment</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Skills</a>

                        </div>
                    </nav>
                </div>
                <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <nav id="scroll-cards">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Classes</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Equipment</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Skills</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Builds</a>
                        </div>
                    </nav>
                </div>
                <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                    <nav id="scroll-cards">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Classes</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Equipment</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Skills</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Builds</a>
                            </div>
                    </nav>
                </div>
                <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <nav id="scroll-cards">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Classes</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Equipment</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Skills</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Builds</a>
                            </div>
                    </nav>
                </div>
                <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                    <nav id="scroll-cards">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Classes</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Equipment</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Skills</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Builds</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="tab-content" id="nav-tabContent" style={{backgroundColor:"#242629"}}>
                <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    
                    <ClassCard/>
                    <ClassCard/>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <ClassCard/>
                </div>

            </div>
        </div>

    )
}
export default Tab;