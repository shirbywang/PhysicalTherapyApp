/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 const user = [
  {
     name: 'Jane Doe',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
 ]


import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {SocialIcon, Card, Avatar, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class ProfileScreen extends Component{

static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-settings" size={25} style={{color: tintColor}}/>
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
      <ScrollView style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Settings</Text>
        <Card style={{paddingBottom:10}}>
          <Avatar
            xlarge
            source={{uri: user[0].avatar}}
          />

              <Text style={{fontSize:20}}>Name:Jane Doe</Text>
              <Text style={{fontSize:20}}>Goal: Run the Disney half-marathon</Text>
              <Text style={{fontSize:20}}>Injury: IT Band Syndrome</Text>
          </Card>


          <Card>
          <View>
            <ListItem
            title='Notifications'/>
            <ListItem
            title='Change Profile Pic'/>
            <ListItem
            title='Change Goal'/>
            <ListItem
            title='Privacy'/>
            <ListItem
            title='Terms of Use'/>
            <ListItem
            title='Disclaimer'/>
            <ListItem
            title='Sign Out'/>
          </View>
        </Card>

      </ScrollView>

    );
  }
}

export default ProfileScreen;
