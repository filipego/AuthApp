import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDuaguDnRE7ehCCajC18zWP1S2ZzIJlvig',
      authDomain: 'auth-30bfa.firebaseapp.com',
      databaseURL: 'https://auth-30bfa.firebaseio.com',
      projectId: 'auth-30bfa',
      storageBucket: 'auth-30bfa.appspot.com',
      messagingSenderId: '993549188138'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
