import React, { Component } from 'react';
import Section from 'components/Section';
import './index.scss';

export default class Structure extends Component {
  render() {
    return (
      <Section id='Structure'>
        <h4 className='hasLine'><span className='line' />Structure</h4>
        <br />
        <p>
          This boilerplate structure is inspired by <a href='https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346'>Ryan Florence</a> and <a href='https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1'>Alexis Mangin</a> ideas of react app structure.
        </p>
        <pre className='code'>
          <code>
            app <br />
            ├── components <br />
            │   ├── Container <br />
            │   │   ├── index.jsx <br />
            │   │   ├── index.scss <br />
            │   │   └── ... <br />
            │   │ <br />
            │   ├── Logo <br />
            │   ├── Menu <br />
            │   ├── Sidebar <br />
            │   └── ... <br />
            │<br />
            ├── screens <br />
            │   ├── About <br />
            │   │   ├── components <br />
            │   │   │   ├── Hero <br />
            │   │   │   ├── Content <br />
            │   │   │   └── ... <br />
            │   │   │ <br />
            │   │   ├── shared <br />
            │   │   ├── index.jsx <br />
            │   │   ├── index.scss <br />
            │   │   └── ... <br />
            │   │ <br />
            │   ├── Home <br />
            │   ├── 404 <br />
            │   └── ... <br />
            │ <br />
            ├── shared <br />
            │   ├── config <br />
            │   │   ├── routes.jsx <br />
            │   │   └── ... <br />
            │   │ <br />
            │   ├── services <br />
            │   │   ├── RequestService.jsx <br />
            │   │   └── ... <br />
            │   │ <br />
            │   ├── static <br />
            │   │   ├── favicon.ico <br />
            │   │   └── ... <br />
            │   │ <br />
            │   ├── stores <br />
            │   │   ├── clientStore.jsx <br />
            │   │   └── ... <br />
            │   │ <br />
            │   ├── styles <br />
            │   │   ├── settings <br />
            │   │   ├── components <br />
            │   │   ├──  ... <br />
            │   │   └── index.scss <br />
            │   └── ... <br />
            │ <br />
            ├── index.html <br />
            └── index.jsx <br />
          </code>
        </pre>
      </Section>
    );
  }
}
