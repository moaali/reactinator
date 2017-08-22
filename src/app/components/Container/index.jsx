import React, { Component } from 'react';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import './index.scss';

export default class Container extends Component {
  render() {
    return (
      <div id='Container'>
        <Sidebar />
        <Main />
      </div>
    );
  }
}
