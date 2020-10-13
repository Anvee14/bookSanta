import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DonateScreen from '../Screens/DonateScreen'
import RequestScreen from '../Screens/RequestScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'

export const tabNavigator = createBottomTabNavigator
({
  Request: { screen: RequestScreen,
             navigationOptions:{
               tabBarIcon:<Image
               source={require("./assets/book.png")}
               style={{ width: 80, height: 80 }}
             />
               
             }
           },
  Donate: { screen: DonateScreen,
    navigationOptions:{
    tabBarIcon:<Image
    source={require("./assets/book.png")}
    style={{ width: 80, height: 80 }}
  /> },
},

})
