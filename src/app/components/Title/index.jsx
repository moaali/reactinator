import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class PageTitle extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div className='PageTitle'>
        <h3 className='hasLine'>{this.props.children}</h3>
      </div>
    );
  }
}
