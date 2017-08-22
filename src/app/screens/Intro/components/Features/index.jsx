import React, { Component } from 'react';
import Section from 'components/Section';
import './index.scss';

export default class Features extends Component {
  render() {
    return (
      <Section>
        <h4 className='hasLine'><span className='line' />Features</h4>
        <br />
        <ul>
          <li>Quick scaffolding</li>
          <li>Next generation JavaScript (<b>ES6+</b>)</li>
          <li>Next generation CSS with (<b>SASS</b> and <b>CSSNext</b>)</li>
          <li><b>Bootstrap 4</b> based</li>
          <li><b>Mobx</b> for state managemnt</li>
          <li><b><a href='https://github.com/gorangajic/react-icons'>React Icons</a></b> icons bundle</li>
          <li>Industry-standard routing (<b>React Router v4.x.x</b>)</li>
          <li><b>SEO</b> optimized</li>
          <li>Extensible directory structure</li>
          <li><b>Cross platform</b> compitable</li>
        </ul>
      </Section>
    );
  }
}
