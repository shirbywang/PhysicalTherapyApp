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
import {SocialIcon, Card, Avatar} from 'react-native-elements';
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
      <View style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Profile</Text>
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

          <Image source={require('../arrow.png')} style={{ width: 90,height:90, marginTop: 10, marginLeft:60}}/>
          <View style={{position: 'absolute', top: 20, left: 0, right: 135, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'black', textAlign:'center'}}>3245 {"\n"}pts</Text>
          </View>

          <Image source={require('../fire.png')} style={{marginLeft:60, width: 100,height:100}}/>
          <View style={{position: 'absolute', top: 20, left: 170, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'black', textAlign:'center'}}>35 {"\n"}days</Text>
          </View>



          </View>

        </Card>

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Settings</Text>
        <Text style={{color:'white', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Information on settings here or separate that to the icon</Text>


      </View>

    );
  }
}

export default ProfileScreen;
