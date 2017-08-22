import React, { Component } from 'react';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import IconNavbar from 'components/IconNavbar';
import FatGithubSquare from 'react-icons/lib/fa/github-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import './index.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div id='Sidebar'>
        <Logo />
        <Menu />
        <IconNavbar
          icons={[
            <FatGithubSquare />,
            <FaTwitterSquare />,
          ]}
          urls={[
            'https://github.com/moaali/reactinator',
            'https://twitter.com/home?status=Check%20out%20%23reactinator%20%23React%20%23web%20%23app%20%23boilerplate%20https%3A//github.com/moaali/reactinator',
          ]}
        />
      </div>
    );
  }
}
