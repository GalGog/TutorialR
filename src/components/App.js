import React, { Component } from 'react';
import '../App.css';
import ShoppingList from './ShoppingList.js'
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div className="App">
       <ShoppingList name="Lina" />
        <Game />
      </div>
    );
  }
}

export default App;
