/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, ScrollView, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';



//for every survey make an entry with the date collected, done workout, and strength level etc.
class ProgressScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-stats" size={25} style={{color: tintColor}}/>
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

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Progress</Text>

        <Image source={require('../progressplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>

        <Text style={{color:'white', fontSize: 15, paddingTop: 25, paddingLeft: 35, paddingRight: 30, paddingBottom: 25}}>
          this is where competitors averages may come in and possibly seeing old data/n
          there could be a toggle button to switch between the two
        </Text>

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Log</Text>

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Date</Text>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Past survey results below</Text>



        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Date</Text>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Past survey results below</Text>





      </ScrollView>



    );
  }
}

export default ProgressScreen;
