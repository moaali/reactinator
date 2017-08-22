import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import './index.scss';

export default class Section extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  }

  render() {
    const { className, children, ...props } = this.props;
    return (
      <section className={classNames('Section', this.props.className)} {...props}>
        {children}
      </section>
    );
  }
}
