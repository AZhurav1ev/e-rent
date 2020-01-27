import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RentPage from './pages/rentpage/rentpage.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/rent' component={RentPage} />
    </Switch>
  );
}

export default App;
