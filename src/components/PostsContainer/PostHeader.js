// You do not need to change any code in this file

import React from "react";
import "./Posts.css";

const PostHeader = (props) => {
    return (
        <div className="post-header">
            <img alt="post header" className="post-thumb" src={props.thumbnailUrl} />
            <span className="posts-username">{props.username}</span>
        </div>
    );
};

export default PostHeader;
