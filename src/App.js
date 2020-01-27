import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RentPage from './pages/rentpage/rentpage.component';
import Header from './components/header/header.components';

function App() {
  return (
    <Container fluid>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/rent' component={RentPage} />
      </Switch>
    </Container>
  );
}

export default App;
