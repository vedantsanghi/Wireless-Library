import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainor, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import SeachClass from './Search';
import TransactionClass from './Transaction';

export default class App extends Component {
  render() {
    return (
      <AppConatiner />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionClass },
  Seacrh: { screen: SeachClass }
})

const AppConatiner = createAppContainor(TabNavigator)