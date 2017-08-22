import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { routeCodes } from 'shared/config/routes';
import Logo from './logo.component.svg';
import './index.scss';

export default class Container extends Component {
  render() {
    return (
      <div className='Logo'>
        <Link to={ routeCodes.INTRO }>
          <Logo width={60} height={54} />
          <h4 className='LogoText'>Reactinator</h4>
        </Link>
      </div>
    );
  }
}
