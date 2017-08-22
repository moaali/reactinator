import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'components/container';
import './index.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    );
  }
}
