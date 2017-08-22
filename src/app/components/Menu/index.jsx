import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routeCodes } from 'shared/config/routes';
import FaHome from 'react-icons/lib/fa/home';
import FaFileText from 'react-icons/lib/fa/file-text';
import FaRefresh from 'react-icons/lib/fa/refresh';
import FaPaperclip from 'react-icons/lib/fa/paperclip';
import './index.scss';

const
  Link = ({ children, ...props }) => (
    <NavLink
      activeClassName='MenuLink-active'
      className='MenuLink'
      { ...props }
    >
      {children}
    </NavLink>
  );

Link.propTypes = {
  children: PropTypes.any.isRequired,
};

export default class Menu extends Component {
  render() {
    return (
      <div className='MenuWrapper'>
        <nav className='Menu'>
          <Link exact to={ routeCodes.INTRO }><FaHome className='MenuIcon' />Intro</Link>
          <Link to={ routeCodes.STATE_MANAGEMENT }><FaRefresh className='MenuIcon' />State Management</Link>
          <Link to={ routeCodes.DOCS }><FaFileText className='MenuIcon' />Docs</Link>
          <Link to='/404'><FaPaperclip className='MenuIcon' />404</Link>
        </nav>
      </div>
    );
  }
}
