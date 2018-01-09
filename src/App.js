import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: false},
        {id: 1, name: 'Learn JS', isComplete: false},
        {id: 1, name: 'Learn CSS', isComplete: false}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
       <div className="Todo-App">
        <form>
          <input type="text" />
        </form>
        <div>
          <ul>
            {
              this.state.todos.map(function(todo) {
                return (
                <li>
                  <input key={todo.id} type="checkbox" />
                  {todo.name}
                  </li>)
              })
            }
          </ul>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
