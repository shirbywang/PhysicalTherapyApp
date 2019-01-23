/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'vidpt',
    header: (<View></View>),
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Workout: WorkoutScreen,
  Chat: ChatScreen,
  Profile: ProfileScreen,
});

const AppContainer = createAppContainer(TabNavigator)

export default MainScreen;
