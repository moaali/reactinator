import React, { Component } from 'react';
import Section from 'components/Section';
import introImg from './intro.png';
import './index.scss';

export default class Description extends Component {
  render() {
    return (
      <Section>
        <h4 className='hasLine'><span className='line' />Description</h4>
        <br />
        <div>
          <img src={introImg} className='img-fluid' alt='intro' />
        </div>
        <br />
        <p>
          Minimalistic boilerplate to start developing <b>React JS</b> applications in
          just few seconds easily with the included tooling. Using <b>Webpack, Mobx, Babel</b>.
        </p>
      </Section>
    );
  }
}
