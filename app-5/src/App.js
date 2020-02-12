import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './image.js'

export default class App extends Component {
  render() {
  return (
    <div className='App'>
      <Image url={'https://i.kym-cdn.com/photos/images/original/001/515/924/228.jpg'}/>
    </div>
  );
  }
}
