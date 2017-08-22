import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Intro from 'screens/Intro';
import Docs from 'screens/Docs';
import StateManagement from 'screens/StateManagement';
import NotFound from 'screens/404';

const publicPath = '/';

export const routeCodes = {
  INTRO: publicPath,
  DOCS: `${ publicPath }about`,
  STATE_MANAGEMENT: `${ publicPath }state-management`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Intro } />
    <Route path={ routeCodes.DOCS } component={ Docs } />
    <Route path={ routeCodes.STATE_MANAGEMENT } component={ StateManagement } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
