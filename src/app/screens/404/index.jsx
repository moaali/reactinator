import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Animation from 'components/Animation';
import Content from './components/Content';
import './index.scss';

export default class NotFound extends Component {
  render() {
    return (
      <Animation id='Main-404'>
        <Helmet>
          <title>Reactinator :: 404</title>
        </Helmet>
        <Content />
      </Animation>
    );
  }
}
