/**
 * THIS IS THE SETTINGS SCREEN.
 * USERS CAN EDIT THEIR ACCOUNT AND SIGN OUT.
 */


import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {SocialIcon, Card, Avatar, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class SettingScreen extends Component{

 isNew=false;

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

_logout = () =>{
    this.props.navigation.navigate('Login');
}

  render() {

    const newuser = <Avatar xlarge source={{uri: 'http://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png'}}/>;

    const returninguser = <Avatar xlarge source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>;

    if (this.isNew){
      user = newuser
      name = 'Victor'//name //whatever is passed from the survey screen
      injury= 'IT Band Syndrome'
      goal = 'I want to surf again.'//Goal
    } else{
      user = returninguser
      name = 'Jane'//name //whatever is passed from the login screen
      injury= 'IT Band Syndrome'
      goal = 'I want to run the Disney half-marathon.'//Goal
    }

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Settings</Text>
        <Card style={{paddingBottom:10}}>
          <View>{user}</View>

              <Text style={{fontSize:20}}>Name:{name}</Text>
              <Text style={{fontSize:20}}>Goal: {goal}</Text>
              <Text style={{fontSize:20}}>Injury: {injury}</Text>
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
            title='Sign Out'
            onPress={this._logout}/>
          </View>
        </Card>

      </ScrollView>

    );
  }
}

export default SettingScreen;
