import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat.js';
import ChatStats from './components/ChatStats.js';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux';

const store = createStore(rootReducer); 

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      	<div className="App">
	        <ChatStats/>
	        <div className = 'App-messanger'>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1> Message Chat </h1>
            </header>
	        <Chat/>
	        </div>
        </div>
      </Provider>
    );
  }
}

export default App;
