import React from 'react'
import "./Post.css"
import Comment from "../../assets/images/comment.png"
import Share from "../../assets/images/share.png"
import Heart from "../../assets/images/like.png"
import NotLike from "../../assets/images/notlike.png"

const Post = ({ post, id }) => {
  return (
    <div className='Post'>
      <img src={post.img} alt="" />
      <div className="postReact">
        <img src={post.liked ? Heart : NotLike} alt={post.likes ? "like-icon" : "notlike-icon"} />
        <img src={Comment} alt="comment-icon" />
        <img src={Share} alt="share-icon" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{post.likes} likes</span>
      <div className="details">
        <span>
          <b>{post.name}</b>
        </span>
        <span> {post.desc}</span>
      </div>
    </div>
  )
}

export default Post