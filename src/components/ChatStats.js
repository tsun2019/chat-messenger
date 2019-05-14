import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatStats extends Component{
  render(){
    return(
      <div className = 'stats-container'>
	 <h4> User Chat Statistics </h4>
  	 <div> Messages Sent: {this.props.messageCounter} </div>
         <div> # of Characters Used: {this.props.userCharCounter}</div>
	 <div> Total Duration Elapsed: </div>
      </div>
    );
 }
}

function mapStateToProps(state) {
  return {messages: state.messages,
	  messageCounter: state.messageCounter,
          userCharCounter: state.userCharCounter
  };
}

export default connect(mapStateToProps)(ChatStats);

