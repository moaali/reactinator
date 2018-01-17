import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from 'screens/Index';
import NotFound from 'screens/404';

const
  publicPath = '/',
  routes = {
    INDEX: publicPath,
  };

const
  createRoutes = () => (
    <Switch>
      <Route exact path={ publicPath } component={ Index } />
      <Route path='*' component={ NotFound } />
    </Switch>
  );

export default createRoutes;
export {
  routes,
};
