/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, ScrollView, Button, Image, View, StyleSheet, Dimensions} from 'react-native';
import PureChart from 'react-native-pure-chart';


import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';

var screenheight = Dimensions.get('window').height;

let progressData = [
	{
	seriesName: 'Performance',
	data: [
		{x: '2019-03-03', y: 1},
		{x: '2019-10-03', y: 2},
		{x: '2019-17-03', y: 3},
		{x: '2019-24-03', y: 4}
		],
		color: '#7D3C98'
	},
	{
	seriesName: 'Range of Motion',
	data: [
		{x: '2019-03-03', y: 2},
		{x: '2019-10-03', y: 3},
		{x: '2019-17-03', y: 4},
		{x: '2019-24-03', y: 5}
		],
		color: '#CA6F1E'
	},
	{
	seriesName: 'Pain',
	data: [
		{x: '2019-03-03', y: 3},
		{x: '2019-10-03', y: 4},
		{x: '2019-17-03', y: 5},
		{x: '2019-24-03', y: 6}
		],
		color: '#CB4335'
	},
	{
	seriesName: 'Improvement',
	data: [
		{x: '2019-03-03', y: 4},
		{x: '2019-10-03', y: 5},
		{x: '2019-17-03', y: 6},
		{x: '2019-24-03', y: 7}
		],
		color: '#229954'
	},
	{
	seriesName: 'VidPT',
	data: [
		{x: '2019-03-03', y: 5},
		{x: '2019-10-03', y: 6},
		{x: '2019-17-03', y: 7},
		{x: '2019-24-03', y: 8}
		],
		color: '#2E86C1'
	}
]

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


        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 15}}>Progress Chart</Text>
          <View style={{alignItems:'center'}}>
          <Card>
              <PureChart
                type={'line'}
                data={progressData}
                height={screenheight*.25}
              />
          </Card>
          </View>



        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 15}}>Past Survey Results</Text>

        <View>
          <Card title='March 1, 2019'>

            <View style={styles.stats}>
              <Icon name="md-fitness" size={25}/>
              <Text style={{fontSize:20, paddingLeft:45}}>Range of Motion: 4</Text>
            </View>
            <View style={styles.stats}>
              <Icon name="md-bicycle" size={25}/>
              <Text style={{fontSize:20, paddingLeft:45, textAlign:'right'}}>Performance: 10</Text>
            </View>

          </Card>

          <Card title='March 4, 2019'>

            <View style={styles.stats}>
              <Icon name="md-fitness" size={25} color="#ff4858"/>
              <Text style={{fontSize:20, paddingLeft:45}}>Strength: 4</Text>
            </View>
            <View style={styles.stats}>
              <Icon name="md-bicycle" size={25} color="#ff4858"/>
              <Text style={{fontSize:20, paddingLeft:45, textAlign:'right'}}>Performance: 10</Text>
            </View>
          </Card>

        </View>




      </ScrollView>



    );
  }
}

export default ProgressScreen;

const styles = StyleSheet.create({

  stats:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
