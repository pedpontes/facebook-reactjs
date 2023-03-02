import React from "react";
import '../App.css'


function Comment(props){
    return(
        <div className="commentContainer">
            <img className="foto" src={props.commentAuthor.avatar}></img>
            <div className="comment">
                <div className="content">
                    <div className="name">{props.commentAuthor.name}</div>
                    {props.content}
                </div>
            </div>
        </div>
    )
};


export default Comment;