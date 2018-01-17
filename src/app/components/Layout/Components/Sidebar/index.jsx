import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'shared/config/routes';
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default class Sidebar extends Component {
  render() {
    return (
      <div id='Sidebar'>
        <nav className='Menu'>
          <Link exact to={ routes.INDEX }>Home</Link>
          <br/>
          <Link to='/404'>404</Link>
        </nav>
      </div>
    );
  }
}
