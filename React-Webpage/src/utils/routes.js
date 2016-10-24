import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main'
import Home from '../components/Home'
import PageOne from '../components/PageOne'
import PageTwo from '../components/PageTwo'
import PageThree from '../components/PageThree'
import FormContainer from '../containers/Form/FormContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/pageone' component={PageOne}/>
      <Route path='/pagetwo' component={PageTwo}/>
      <Route path='/pagethree' component={PageThree}/>
      <Route path='/form' component={FormContainer}/>
    </Route>
  </Router>
);

export default routes
