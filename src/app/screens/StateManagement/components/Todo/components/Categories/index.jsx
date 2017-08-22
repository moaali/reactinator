import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import { observer } from 'mobx-react';
import TodoStore from '../../shared/stores/todoStore';
import './index.scss';

@observer
export default class Categories extends Component {
  handleClick(e) {
    e.preventDefault();
    TodoStore.setFilter(e.target.getAttribute('data-filter'));
  }

  render() {
    return (
      <div>
        <nav className='todosCats'>
          <a href='!#' data-filter='none' onClick={this.handleClick}>
            All
            <Badge color='default' pill>{TodoStore.getAll().length}</Badge>
          </a>
          <a href='!#' data-filter='completed' onClick={this.handleClick}>
            Completed
            <Badge color='success' pill>{TodoStore.getCompleted().length}</Badge>
          </a>
          <a href='!#' data-filter='onhold' onClick={this.handleClick}>
            On-hold
            <Badge color='danger' pill>{TodoStore.getOnHold().length}</Badge>
          </a>
        </nav>
      </div>
    );
  }
}
