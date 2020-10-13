import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import {tabNavigator} from './components/tabNavigator'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>
      <LoginScreen/>
      <tabNavigator/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  BottomTab:{screen:tabNavigator}
})
const appContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
