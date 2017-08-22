import React, { Component } from 'react';
import Section from 'components/Section';
import './index.scss';

export default class Installation extends Component {
  render() {
    return (
      <Section id='Installation'>
        <h4 className='hasLine'><span className='line' />Installation</h4>
        <br />
        <p>
          To start using this boilerplate, all what you have to do is copy
          and paste the following commands in your terminal.
        </p>
        <pre className='code'>
          <code>
            &gt; git clone https://github.com/moaali/reactinator.git <br />
            &gt; cd reactinator <br />
            &gt; npm install <br />
            &gt; npm run dev <br />
          </code>
        </pre>
      </Section>
    );
  }
}
