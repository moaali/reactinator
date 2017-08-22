import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { autobind } from 'core-decorators';
import TodoStore from '../../shared/stores/todoStore';
import './index.scss';

export default class TodoForm extends Component {
  @autobind
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  @autobind
  handleSubmit(e) {
    e.preventDefault();
    TodoStore.setAll(this.state.value);
    e.target.reset();
  }

  render() {
    return (
      <Form  onSubmit={this.handleSubmit} className='todoForm' inline>
        <FormGroup>
          <Input
            type='text'
            placeholder='Add Todo Item'
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color='primary' type='submit'>Submit</Button>
      </Form>
    );
  }
}
