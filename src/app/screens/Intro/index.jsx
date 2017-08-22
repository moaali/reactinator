import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Animation from 'components/Animation';
import Title from './components/Title';
import Description from './components/Description';
import Features from './components/Features';
import './index.scss';

export default class Intro extends Component {
  render() {
    return (
      <Animation id='Main-intro'>
        <Helmet>
          <title>Reactinator :: Intro</title>
        </Helmet>
        <Title />
        <Description />
        <Features />
      </Animation>
    );
  }
}
