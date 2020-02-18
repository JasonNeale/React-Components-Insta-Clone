// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ comments }) => {
    // const [postComment, setPostComment] = useState('')
    return (
        <div>
            {comments.map((postComment, index) => (
                <Comment username={postComment.username} text={postComment.text} key={index} />
            ))}
            <CommentInput />
        </div>
    );
};

export default CommentSection;
