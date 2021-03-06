/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import SettingScreen from './screens/SettingScreen';
import ProgressScreen from './screens/ProgressScreen';
import DoWorkoutScreen from './screens/DoWorkoutScreen';
import CompletedWorkout from './screens/CompletedWorkout';
import PostWorkoutSurveyScreen from './screens/PostWorkoutSurvey';
import Icon from 'react-native-vector-icons/dist/Ionicons';


var screenwidth = Dimensions.get('window').width;

class LogoTitle extends Component{
  render() {
    return (
      <View style={{padding: (screenwidth*.38)}}>
        <Image source={require('./logo.png')}/>
      </View>
    );
  }
}


//WORKOUT NAVIGATION
const WorkoutPages = createStackNavigator({
    ViewWorkout: WorkoutScreen,
    DoWorkout: DoWorkoutScreen,
    Completed: CompletedWorkout,
    PostWorkoutSurvey: PostWorkoutSurveyScreen,
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
  Setting: SettingScreen,
});



const AppContainer = createAppContainer(TabNavigator)

export default MainScreen;
