// Create an app where there is an array of data on state that is then shown on the DOM as a list. The array of data
//  can be as simple as an array of strings. The list can be as simple as a list of `<h2>` elements.
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
    colors: ['black','purple','blue']
    }
  };
  
  render() {
let colors = this.state.colors.map((element,index) => {
  return <h2 key={index}>{element}</h2>
});

  return ( 
    <div className= 'App'>{colors}</div>
  );
}
}