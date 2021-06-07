import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import firebase from 'firebase'
import { firebaseConfig } from './src/configs'
import { AuthenticationStack } from './src/navigation/Navigation'
import { AuthenticatedStack } from './src/navigation/Navigation'
import Spinner from './src/components/Spinner';

export default class App extends Component {
  state = { loggedIn: null }
  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContaint = () => {
    switch (this.state.loggedIn) {
      case true:
        return <AuthenticatedStack />
      case false:
        return <AuthenticationStack />
      default:
        return <Spinner />

    }
  }

  render() {
    return (
      <NavigationContainer>
        {this.renderContaint()}
      </NavigationContainer>
    )
  }
}


