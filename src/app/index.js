import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'components';
import './index.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}
