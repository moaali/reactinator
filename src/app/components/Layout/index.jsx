import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './index.scss';

export default class Layout extends Component {
  render() {
    return (
      <div id='Layout'>
        <Sidebar />
        <Main />
      </div>
    );
  }
}
