import React from "react";
import Button from "react-bootstrap/Button";

class BlogPost extends React.Component {

  render() {
    return (
      <div className="post">
        <p className="post-username">username:</p>
        <p className="post-content">content goes here</p>
        <p className="like-count">8 likes</p>
        <Button className="like-button" variant="primary">Like</Button>
      </div>
    )
  }
}


export default BlogPost;
