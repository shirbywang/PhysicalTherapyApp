/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProgressScreen from './screens/ProgressScreen';


class LogoTitle extends Component{
  render() {
    return (
      <View style={{padding: 150}}>
        <Image source={require('./logo.png')}/>
      </View>
    );
  }
}

class MainScreen extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1c7ef8',
    },
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  //Home: HomeScreen,
  Workout: WorkoutScreen, //figure out how to make it the main page even tho icon in middle
  Progress: ProgressScreen,
  Profile: ProfileScreen,
});

const AppContainer = createAppContainer(TabNavigator)

export default MainScreen;
