
import Logo from '../assets/images/LDBLogo.png';
import './Logos.css';
import '../pages/Pages.css';
import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Who do you think will win?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={Logo}
          title="LineDriveBetting"
          subtitle="Share your Opinions Here!"
        />
      </div>
    );
  } 
}

export default App;






