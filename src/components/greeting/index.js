/*
This part of mirror will...
    - Stay in Bottom Middle
    - Greet user
    - Face detection to get name: Backend Required
 */
import React, { Component } from 'react';
import '../../App.css';

class GreetingApp extends Component {
    state = {
        name: 'REAL DATA'
    }
    render() {
        return (<div className="greeting-app">Greeting {this.state.name}</div>);
    }
}

export default GreetingApp;