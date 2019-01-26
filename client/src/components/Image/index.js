import React from "react";

function Image(props) {
    return (
        <image src={props.image} {...props} style={{ width:150, height: 150 }} className="test"alt="placeholder image POE icon">
        {props.children}
        </image>
      


    );
}


export default Image;