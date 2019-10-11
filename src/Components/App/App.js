import React from 'react';
// eslint-disable-next-line
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import PageMain from '../PageMain/PageMain';
import PageConvertor from '../PageConvertor/PageConvertor';

const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={PageMain} />
      <Route path="/home" component={PageMain} />
      <Route path="/convertor" component={PageConvertor} />
      <Route render={() => <p>Page not found</p>} />
    </Switch>
  </>
);
export default App;
