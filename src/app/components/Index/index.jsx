import React, { Component } from 'react';
import classNames from 'classnames/dedupe';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import './index.scss';

export default class Index extends Component {
  static propTypes = {
    className : PropTypes.string,
    links     : PropTypes.object.isRequired,
  }

  @autobind
  content() {
    const
      links        = this.props.links,
      linksContent = Object.keys(links);

    return linksContent.map(content => {
      return (
        <li key={links[content]}>
          <a href={links[content]}>{content}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={classNames('Index', this.props.className)}>
        {this.content()}
      </ul>
    );
  }
}
