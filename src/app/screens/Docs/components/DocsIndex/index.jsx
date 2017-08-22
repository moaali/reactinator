import React, { Component } from 'react';
import Section from 'components/Section';
import Index from 'components/Index';
import './index.scss';

const links = {
  'Installation' : '#Installation',
  'Structure'    : '#Structure',
  'Commands'     : '#Commands',
};

export default class DocsIndex extends Component {
  render() {
    return (
      <Section id='DocsIndex'>
        <h4 className='hasLine'><span className='line' />Index</h4>
        <br />
        <Index links={links} className='Index-docs' />
      </Section>
    );
  }
}
