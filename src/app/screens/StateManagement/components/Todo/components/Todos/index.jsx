import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import classNames from 'classnames';
import { autobind } from 'core-decorators';
import md5 from 'js-md5';
import { observer } from 'mobx-react';
import TodoStore from '../../shared/stores/todoStore';
import './index.scss';

@observer
export default class Todos extends Component {
  handleChange(id, e) {
    const
      checked = e.target.checked;

    if (checked) {
      TodoStore.setCompleted(id);
    }

    if (!checked) {
      TodoStore.setUnCompleted(id);
    }
  }

  handleClick(id) {
    TodoStore.deleteTodo(id);
  }

  @autobind
  renderTodos() {
    return TodoStore.getShown().map((todo, i) => {
      const id = todo.id;

      return (
        <div
          className={classNames('todosItem', { 'compeleted': TodoStore.isCompleted(id) })}
          key={md5(todo + i)}
        >
          <Input type='checkbox' onChange={this.handleChange.bind(null, id)}  data-idx={id} checked={TodoStore.isCompleted(id)} />
          <p className='todosItemText'>{todo.todo}</p>
          <Button color='danger' onClick={this.handleClick.bind(null, id)} data-idx={id}>Delete</Button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='todos'>{this.renderTodos()}</div>
    );
  }
}
