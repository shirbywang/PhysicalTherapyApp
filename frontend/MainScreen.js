/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProgressScreen from './screens/ProgressScreen';
import DoWorkoutScreen from './screens/DoWorkoutScreen';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class LogoTitle extends Component{
  render() {
    return (
      <View style={{padding: 150}}>
        <Image source={require('./logo.png')}/>
      </View>
    );
  }
}


//WORKOUT NAVIGATION
const WorkoutPages = createStackNavigator({
    ViewWorkout: WorkoutScreen,
    DoWorkout: DoWorkoutScreen,
  });
const WorkContainer = createAppContainer(WorkoutPages)

class WorkoutPage extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-stopwatch" size={25} style={{color: tintColor}}/>
    ),
    tabBarOptions: {
      activeBackgroundColor: '#1c7ef8',
      activeTintColor: '#1aecb7',
      inactiveBackgroundColor: '#1c7ef8',
      inactiveTintColor: 'white'
    },
  }
  render() {
    return (
      <WorkContainer/>
    );
  }
}

//TAB NAVIGATION AND HEADER
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
  Home: HomeScreen,
  Workout: WorkoutPage, //figure out how to make it the main page even tho icon in middle
  Progress: ProgressScreen,
  Profile: ProfileScreen,
});



const AppContainer = createAppContainer(TabNavigator)

export default MainScreen;
