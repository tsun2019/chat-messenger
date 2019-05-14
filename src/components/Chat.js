import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/index.js';
import MessageBox from './MessageBox.js';

//chat component that holds the state for the application to handle messages/computer responses. Also has handle event method that is passed onto child to keep state in this component
class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responses: ['Hi! How are you doing?', 'Good? That\'s great to hear!', 'I\'m doing great also!', '¯\\_(ツ)_/¯'],
      index: -1
    }
  }
   

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
	    const message = {
	      from: 'user', 
	      message: e.target.value, 
	      date: new Date().toLocaleTimeString()
      };
	    e.preventDefault();
      e.target.value = "";
	    let index = this.state.index + 1;
	    this.props.dispatch(addMessage(message));
	    this._handleResponse(index);
      this.setState({
        index
      });
    }
  }

  _handleResponse = (index) => {
    index = index%this.state.responses.length;
    const message = {
      from: 'computer', 
      message: this.state.responses[index], 
      date: new Date().toLocaleTimeString()
    };
    this.props.dispatch(addMessage(message));
  }
 
  _handleDate = () => {
    const months = ["January", "February", "March", 
                    "April", "May", "June","July",
                    "August", "September", "October",
                    "November", "December"];
    const d = new Date();
    return months[d.getMonth()] + " " 
            + d.getDate() + " " + d.getFullYear();
}

 

  render() {
    return(
      <div>
	      <div className="chat-container">
	        <div className='full-date'>{this._handleDate()}</div>
	          {this.props.messages.map((element, i) => {
	            return(
	              <div key = {i}>
	                <div className = {element.from}>
		                <div className = 'bubble-container'>
	                    <div className = 'messagesDisplay'>
		       	            {element.from.charAt(0).toUpperCase() + element.from.substring(1)}:&nbsp;{element.message} 	 
		                  </div>
		                  <div className = 'date'> {element.date} </div>
		                </div>
	                </div>
	              </div>
	            )
	          })
            }
	      </div>
	      <MessageBox onKeyPress = {this._handleKeyPress}/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log(state);
  return {messages: state.messages,
          messageCounter: state.messageCounter,
          userCharCounter: state.userCharCounter};
}

export default connect(mapStateToProps)(Chat);
