import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

/* --------- home ----------*/
import Home from '@/Home/Home';

export default (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);
