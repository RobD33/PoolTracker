import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen'

export default class App extends Component{
  state = {
    currentUser: ""
  };
  render() {
    return (
      <AppContainer
      />
    );
  }

  componentDidMount() {
    return AsyncStorage.getItem("currentUser").then(currentUser => {
      if (currentUser) {
        this.setState({
          currentUser
        });
      }
    });
  }

  updateUser = currentUser => {
    AsyncStorage.setItem("currentUser", currentUser);
    this.setState({
      currentUser
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator)
