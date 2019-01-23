/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class HomeScreen extends Component{
  _login(){
    alert("login!");
  }

  _signUp(){
    alert("signup!");
  }


  static navigationOptions = {
    header: (<View></View>),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} style={{color: tintColor}}/>
    )
  }





  render(){
    return(
      <ScrollView style={{ flex: 1, backgroundColor: '#111d53', scrollEnabled:true}}>
        <Image source={require('../logo.png')} style={{alignSelf: 'center', backgroundColor: '#1c7ef8'}}/>

        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: '#19d6ad'}}> Welcome, Michael! </Text>
        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: 'white'}}> Workouts </Text>
        <Image source={require('../workoutplaceholder.png')} style={{alignSelf: 'center'}}/>

        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: 'white'}}> Progress </Text>
        <Image source={require('../progressplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>

        <Text style={{fontSize: 20, paddingTop: 25, paddingLeft: 10, color: 'white'}}> Community </Text>
        <Image source={require('../imageplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>
      </ScrollView>
    );

  }
}



export default HomeScreen;
