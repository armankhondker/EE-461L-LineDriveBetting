
import Logo from '../assets/images/LDBLogo.png';
import ImgButton from "../components/Logos.css";
import './Pages.css'
import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import BlogPost from "../components/BlogPost";
import ReactLoading from "react-loading";

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state= {
      blogPosts: null,
      isLoaded: false
    }
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    let api = 'https://e6x9m59wb1.execute-api.us-east-1.amazonaws.com/latest/api/blog_posts/';
    fetch(api, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials' : true ,
        'Access-Control-Allow-Headers': 'X-Requested-With'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        blogPosts: data.data.reverse(),
        isLoaded: true
      }), (error) => {
        if (error) {
          console.log(error)
        }
    });
  }

  render() {
    return (
      <div className="Pages-Nfl">
        <div className="blog-page">
      {
        this.state.isLoaded ? ( this.state.blogPosts.map((value, index) => {
          return(
            <BlogPost key={index} team1={value.team1} team2={value.team2} game_date={value.game_date} username={value.username} content={value.content} create_date={value.create_date}/>
          )
        }) ) : (
          <ReactLoading type={"spin"} color={"#ffffff"} height={'20%'} width={'20%'} />
        )
      }
        </div>
      </div>
    );
  }
}

export default Blog;
