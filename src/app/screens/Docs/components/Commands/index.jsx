import React, { Component } from 'react';
import Section from 'components/Section';
import './index.scss';

export default class Commands extends Component {
  render() {
    return (
      <Section id='Commands'>
        <h4 className='hasLine'><span className='line' />Commands</h4>
        <br />
        <p>
          Below are the available terminal commands used by this boilerplate:
        </p>
        <ul>
          <li>
            <b><code>npm start</code></b> :
            Running into development mode but without fancy webpack dashboard plugin.
          </li>
          <li>
            <b><code>npm run dev</code></b> :
            Running into development mode with fancy webpack dashboard plugin ebabled.
          </li>
          <li>
            <b><code>npm run clean</code></b> :
            Delete the production folder before running the build command below.
          </li>
          <li>
            <b><code>npm run build</code></b> :
            Produce the production version of the app.
          </li>
          <li>
            <b><code>npm run preview</code></b> :
            Run server on the built production folder just for client preview.
          </li>
          <li>
            <b><code>npm run lint:js</code></b> :
            Linting JavaScript files.
          </li>
          <li>
            <b><code>npm run lint:scss</code></b> : test
            Linting Sass files.
          </li>
          <li>
            <b><code>npm run lint</code></b> :
            Linting both JavaScript & Sass files.
          </li>
        </ul>
      </Section>
    );
  }
}
