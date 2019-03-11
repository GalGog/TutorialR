import React, { Component } from 'react';
import '../App.css';
import ShoppingList from './ShoppingList.js'
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
       <ShoppingList name="Lina" />
        <Board />
      </div>
    );
  }
}

export default App;
