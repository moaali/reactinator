import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import es6Promise from 'es6-promise';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';

es6Promise.polyfill();

const
  render = Component => {
    ReactDom.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root')
    );
  };

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;

    render(NewApp);
  });
}
