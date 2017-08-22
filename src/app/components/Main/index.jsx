import React, { Component } from 'react';
import Routes from 'shared/config/routes';
import './index.scss';

export default class Main extends Component {
  render() {
    return (
      <main id='Main'>
        <Routes />
      </main>
    );
  }
}
