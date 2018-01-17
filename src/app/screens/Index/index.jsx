import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Animation } from 'components';
import Content from './components/Content';
import './index.scss';

export default class Intro extends Component {
  render() {
    return (
      <Animation>
        <Helmet>
          <title>Reactinator :: Home</title>
        </Helmet>
        <Content />
      </Animation>
    );
  }
}
