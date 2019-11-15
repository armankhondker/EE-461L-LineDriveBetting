import React from "react";
import Moment from 'react-moment';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <p className="post-teams">{this.props.team1} vs {this.props.team2} on {this.props.game_date}</p>
        <p className="post-username">{this.props.username}:</p>
        <p className="post-content">{this.props.content}</p>
        <p className="post-date"><Moment>{this.props.create_date}</Moment></p>
      </div>
    )
  }
}


export default BlogPost;
