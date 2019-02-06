/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class HomeScreen extends Component{

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} style={{color:tintColor}}/>
    ),
    tabBarOptions: {
      activeBackgroundColor: '#1c7ef8',
      activeTintColor: '#1aecb7',
      inactiveBackgroundColor: '#1c7ef8',
      inactiveTintColor: 'white'
    }
  }



  render(){
    return(
      <ScrollView style={{ flex: 1, backgroundColor: '#111d53', scrollEnabled:true}}>


        <Text style={{fontSize: 20, paddingTop: 25, textAlign:'center', color: '#19d6ad', fontWeight: 'bold',fontSize: 20}}> Welcome, Jane! </Text>
        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: 'white', fontWeight: 'bold'}}> Workouts </Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Workout')}>
          <Image source={require('../workoutplaceholder.png')} style={{alignSelf: 'center'}}/>
        </TouchableOpacity>

        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: 'white', fontWeight: 'bold'}}> Progress </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Progress')}>
          <Image source={require('../progressplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>
        </TouchableOpacity>

        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: 'white', fontWeight: 'bold'}}> Community </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
          <Image source={require('../imageplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>
        </TouchableOpacity>

      </ScrollView>
    );

  }
}



export default HomeScreen;
