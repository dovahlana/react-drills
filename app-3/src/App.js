// Create an app where there is an array of data on state that is then shown on the DOM as a list. There 
// should also be a way for the user to filter what's shown in the list. The array of data can be as simple as an
//  array of strings. The list can be as simple as a list of `<h2>` elements.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
 constructor() {
   super();

   this.state = {
     filterStr: '',
     arr: ['1','2','3']
   };
  }

handleChange(filter) {
  this.setState({filterStr : filter })
}

render() {
  let numDisplay = this.state.arr
    .filter((element, index) => {
      return element.includes(this.state.filterStr);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      {numDisplay}
    </div>
  );
}
}

