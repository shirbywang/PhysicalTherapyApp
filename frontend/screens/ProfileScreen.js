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
      <View style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Settings</Text>
        <Card>
          <View style={{flexDirection: 'row'}}>
          <Avatar
            xlarge
            source={{uri: user[0].avatar}}
          />
          <Text style={{marginBottom: 10,marginLeft:10, paddingTop: 25, fontSize:20}}>
            Jane Doe {"\n"}Goal: Run a 5k {"\n"}Injury: IT Band {"\n"}Syndrome
          </Text>
          </View >

          <View style={{flexDirection: 'row'}}>



          </View>

        </Card>

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Settings</Text>
        <Text style={{color:'white', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Notifications, Change Profile pic, change goal, Privacy, sign out, Terms of use, Disclaimer</Text>

      </View>

    );
  }
}

export default ProfileScreen;
