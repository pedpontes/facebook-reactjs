import React from "react";
import Comment from "./Comment.js";
import '../App.css'


function Post(props){
    return(
        <div className="post">
            <div>
                <div className="userPost">
                    <img className="foto" src={props.authorPost.avatar}></img>
                    <div className="user">
                        <div className="name">{props.authorPost.name}</div>
                        <div className="time">{props.date}</div>
                    </div>
                </div>
                <div className="content">
                {props.content}
                </div>
                <hr/>
                {props.comments.map(comment => <Comment key={comment.id} commentAuthor={comment.author} content={comment.content}/>)}
            </div>
        </div>
    )   
}


export default Post;