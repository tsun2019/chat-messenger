import React from 'react';

function MessageBox(props){
    return(
      <div className="message-container">
        <form className="message-container">
          <input className = "message-container" type='text' onKeyPress={props.onKeyPress}/>
	</form>
      </div>
   );
}

export default MessageBox;
