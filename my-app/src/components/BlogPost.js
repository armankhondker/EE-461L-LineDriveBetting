import React from "react";
import Button from "react-bootstrap/Button";

class BlogPost extends React.Component {

  render() {
    return (
      <div className="post">
        <p className="post-username">username:</p>
        <p className="post-content">content goes here</p>
        <p className="post-date">Create date</p>
      </div>
    )
  }
}


export default BlogPost;
