/*
This part of mirror will...
    - Stay in Bottom Middle
    - Greet user
    - Face detection to get name: Backend Required
 */
import React, { Component, useEffect, useState } from 'react';
import '../../App.css';

const GreetingWord = (props) => {
    const wordList = ["Greeting ", "Hi ", "Hello ", "Howdy ", "How was your day, ", "Good day, "];
    const [word, setWord] = useState(wordList[0]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const changeWord = setTimeout(() => {
            //console.log(word, index);
            setWord(wordList[index % wordList.length]);
            setIndex((index + 1) % wordList.length);
        }, 10000);
        return () => clearInterval(changeWord)
    }, [index]);
    return (
        <span>
            {word}
        </span>
    );
}

class GreetingApp extends Component {
    state = {
        name: "REAL DATA"
    }
    render() {
        return (<div className="greeting-app" > <GreetingWord /> { this.state.name}</div>);
    }
}

export default GreetingApp;