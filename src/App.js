import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RentPage from './pages/rentpage/rentpage.component';
import Header from './components/header/header.components';
import signInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <Container fluid>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/rent' component={RentPage} />
          <Route path='/signin' component={signInAndSignUpPage} />

        </Switch>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
