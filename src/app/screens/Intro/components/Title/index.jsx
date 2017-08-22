import React, { Component } from 'react';
import PageTitle from 'components/Title';
import './index.scss';

export default class Title extends Component {
  render() {
    return (
      <PageTitle>
        <span className='line' />INTRO
      </PageTitle>
    );
  }
}
