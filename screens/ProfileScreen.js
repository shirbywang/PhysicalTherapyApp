/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {SocialIcon, Card, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class ProfileScreen extends Component{

static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-contact" size={25} style={{color: tintColor}}/>
  ),
  tabBarOptions: {
    activeBackgroundColor: '#1c7ef8',
    activeTintColor: '#1aecb7',
    inactiveBackgroundColor: '#1c7ef8',
    inactiveTintColor: 'white'
  }
}
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Profile Screen </Text>

      </View>

    );
  }
}

export default ProfileScreen;
