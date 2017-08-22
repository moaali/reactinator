import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Animation from 'components/Animation';
import Title from './components/title';
import Description from './components/Description';
import Todo from './components/Todo';
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <Animation id='Main-stateManagement'>
        <Helmet>
          <title>Reactinator :: State Management</title>
        </Helmet>
        <Title />
        <Description />
        <Todo />
      </Animation>
    );
  }
}
