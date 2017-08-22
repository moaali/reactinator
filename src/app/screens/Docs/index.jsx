import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Animation from 'components/Animation';
import Title from './components/Title';
import DocsIndex from './components/DocsIndex';
import Structure from './components/Structure';
import Installation from './components/Installation';
import Commands from './components/Commands';
import './index.scss';

export default class Docs extends Component {
  render() {
    return (
      <Animation id='Main-docs'>
        <Helmet>
          <title>Reactinator :: Docs</title>
        </Helmet>
        <Title />
        <DocsIndex />
        <Installation />
        <Structure />
        <Commands />
      </Animation>
    );
  }
}
