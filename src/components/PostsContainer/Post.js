import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

const Post = ({post: { username, thumbnailUrl, imageUrl, comments, likes, index }}) => {
    const [pLikes, setPLikes] = useState(likes)
    let [likeState, setLikeState] = useState(0)

    
    const handleNewLike = () => {

        if (likeState === 0) {
            setPLikes(pLikes + 1)
            setLikeState(1)
        // likeButton.classList.toggle('liked')
        }
   
        if (likeState === 1) {
            setPLikes(pLikes - 1)
            setLikeState(0)
            // likeButton.classList.toggle('liked')
        }
    }

    return (
        <div className="post-border">
            <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
            <div className="post-image-wrapper">
                <img alt="post thumbnail" className="post-image" src={imageUrl} />
            </div>
            <LikeSection
                pLikes={pLikes}
                handleNewLike={handleNewLike}
                key={index}
            />
            <CommentSection postId={imageUrl} comments={comments} />
        </div>
    );
};

export default Post;
