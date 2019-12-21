import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
        return;
      }

      this.setState({ authed: false });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        { (!authed) ? (<Auth />) : null }
      </div>
    );
  }
}

export default App;
