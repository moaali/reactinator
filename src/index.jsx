import React from 'react';
import ReactDom from 'react-dom';
import es6Promise from 'es6-promise';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import * as stores from './app/shared/stores';
import App from './app';

es6Promise.polyfill();

const
  render = Component => {
    ReactDom.render(
      <Provider {...stores}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
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
