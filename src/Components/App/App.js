import React, { Component } from 'react';
// eslint-disable-next-line
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import PageMain from '../PageMain/PageMain';
import PageConvertor from '../PageConvertor/PageConvertor';
import PageNotFound from '../fromMarkup/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={PageMain} />
          <Route path="/home" component={PageMain} />
          <Route path="/convertor" component={PageConvertor} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}
export default App;
