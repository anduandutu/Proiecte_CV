import React from 'react';

const CommentDetail = (props) => {
    {/**GET THE PROPS */}
    return(
        <div className = "comment">
            {/**USE THE PROPS BY ACCESING props.prop_name*/}
                <a href="/" className="avatar">
                    <img alt = "avatar" src = {props.image} />
                </a>
                <div className = "content">
                    <a href ="/" className ="author">{props.author}</a>
                    <div className = "metadata">
                        <span className = "date">{props.timeAgo}</span>
                    </div>
                    <div className = "text">
                        {props.commentText}
                    </div>
                </div>
        </div>
    );
};

export default CommentDetail;