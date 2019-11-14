import React from "react";

class BlogPost extends React.Component {

  render() {
    return (
      <div className="post">
        <p className="post-username">username:</p>
        <p className="post-content">content goes here</p>
        <p className="like-count">8 likes</p>
      </div>
    )
  }
}


export default BlogPost;
