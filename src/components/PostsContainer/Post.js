import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

const Post = ({post: { username, thumbnailUrl, imageUrl, comments, likes }}) => {
    const [pLikes, setPLikes] = useState(likes)

    let [likeState, setLikeState] = useState(0)
    console.log('likeState:default', likeState)

    // const likeButton = document.querySelector('fa-heart')

    
        const handleNewLike = () => {
            console.log('handleNewLike:likeState', likeState)
            // likeButton.classList.toggle('liked')

            if (likeState === 0) {
                setPLikes(pLikes + 1)
                setLikeState(likeState = 1)
                console.log('likeState:handleNewLike', likeState)
            }
        }

        const handleNewUnlike = () => {
            // likeButton.classList.toggle('liked')
                console.log('handleNewLike:likeState', likeState)

            if (likeState === 1) {
                setPLikes(pLikes - 1)
                setLikeState(likeState = 0)
                console.log('likeState:handleNewLike', likeState)
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
                handleNewUnlike={handleNewUnlike}
            />
            <CommentSection postId={imageUrl} comments={comments} />
        </div>
    );
};

export default Post;
