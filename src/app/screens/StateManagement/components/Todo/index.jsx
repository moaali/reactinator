import React, { Component } from 'react';
import Section from 'components/Section';
import TodoForm from './components/TodoForm';
import Categories from './components/Categories';
import Todos from './components/Todos';
import './index.scss';

export default class Todo extends Component {
  render() {
    return (
      <Section>
        <h4 className='hasLine'><span className='line' />Todo</h4>
        <br />
        <TodoForm />
        <Categories />
        <Todos />
      </Section>
    );
  }
}
