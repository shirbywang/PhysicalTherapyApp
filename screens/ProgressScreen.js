/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';


//use npm to add react-chartkick chart.js

import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)



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

recoveryAnalysis = [
  {"name": "blah", "data": {"2019-02-01": 1, "2019-02-02": 2}},
  {"name": "klh", "data": {"2019-02-01": 3, "2019-02-02": 4}}
];

//        <LineChart data={{"2017-05-13": 2, "2017-05-14": 5}} />




  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Progress</Text>

        <Image source={require('../progressplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>

        <Text style={{color:'white', fontSize: 15, paddingTop: 25, paddingLeft: 35, paddingRight: 30, paddingBottom: 25}}>
          this is where competitors averages may come in and possibly seeing old data/n
          there could be a toggle button to switch between the two
        </Text>

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>LeaderBoard </Text>

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 25}}>Past Survey Results </Text>


      </View>



    );
  }
}

export default ProgressScreen;
