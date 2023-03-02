import React from "react";
import '../App.css'

function Header(props){
    return(
        <div className="header">
            <div className="left">{props.title}</div>
            <div className="right">{props.perfil}</div>
        </div>
    )    
}

export default Header;