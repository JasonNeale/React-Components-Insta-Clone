import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = ({ postData }) => {
    return (
        <div className="posts-container-wrapper">
            <div className="posts-container-inner-wrapper">
                <div className="posts-column">
                    {postData.map((postData, index) => (<Post post={postData} key={index} />))}
                </div>
                <div className="posts-user-column-wrapper">
                    <div id="userColumn" className="posts-user-column"></div>
                    <div id="userColumn" className="posts-user-column-two"></div>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;

