/*
This part of mirror will...
    - Stay on Bottom Left    
    - display todos list of user
    - Todo linked with current user face (Face detection): Backend Required
*/
import React, { Component } from 'react';
import '../../App.css';

const Todo = ({ todo }) => {
    return (
        <li>
            {todo.value}
        </li>
    );
}


class TodoListApp extends Component {
    state = {
        todos: [
            {
                value: "I love Choccy milk",
                owner: "ApexTone",
                id: 123
            }
        ],
    }
    render() {
        return (
            <div className="todo-app">
                TODO APP
                <ul style={{ "list-style-type": "none" }}>
                    {this.state.todos.map(todo => <Todo todo={todo} key={todo.id} />)}
                </ul>
            </div >);
    }
}

export default TodoListApp;