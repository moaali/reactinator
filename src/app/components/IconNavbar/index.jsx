import React, { Component } from 'react';
import classNames from 'classnames/dedupe';
import { autobind } from 'core-decorators';
import md5 from 'js-md5';
import PropTypes from 'prop-types';
import './index.scss';

export default class IconNavbar extends Component {
  static propTypes = {
    className : PropTypes.string,
    icons     : PropTypes.array.isRequired,
    urls      : PropTypes.array.isRequired,
  }

  @autobind
  renderChildren() {
    const
      icons = this.props.icons,
      urls  = this.props.urls;

    return icons.map((icon, i) => {
      return (
        <li key={md5(`iconnavbar ${i}`)}>
          <a href={urls[i]}>
            {icon}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={classNames('IconNavbar', this.props.className)}>
        {this.renderChildren()}
      </ul>
    );
  }
}
