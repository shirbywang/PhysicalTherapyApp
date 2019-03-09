/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, ScrollView, Button, Image, View, StyleSheet} from 'react-native';

import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//import ReactDOM from 'react-dom';
/*import VegaLite from 'react-vega-lite';


const spec = {
  "description": "A simple bar chart with embedded data.",
  "mark": {
    "type": "line",
    "point": true
  },
  "encoding": {
    "x": {"field": "Week", "type": "temporal"},
    "y": {"field": "Score", "type": "quantitative"},
    "color": {"field": "Metric", "type": "nominal"}
  }
};

const barData = {
  "values": [
  {"Week": "03/03/19","Metric": "Performance","Score": 1},
  {"Week": "03/03/19","Metric": "Pain & Range of Motion","Score": 2},
  {"Week": "03/03/19","Metric": "Consistency","Score": 3},
  {"Week": "03/03/19","Metric": "Improvement","Score": 4},
  {"Week": "03/3/19","Metric": "VidPT","Score": 5},
  {"Week": "03/10/19","Metric": "Performance","Score": 2},
  {"Week": "03/10/19","Metric": "Pain & Range of Motion","Score": 3},
  {"Week": "03/10/19","Metric": "Consistency","Score": 4},
  {"Week": "03/10/19","Metric": "Improvement","Score": 5},
  {"Week": "03/10/19","Metric": "VidPT","Score": 6},
  {"Week": "03/17/19","Metric": "Performance","Score": 3},
  {"Week": "03/17/19","Metric": "Pain & Range of Motion","Score": 4},
  {"Week": "03/17/19","Metric": "Consistency","Score": 5},
  {"Week": "03/17/19","Metric": "Improvement","Score": 6},
  {"Week": "03/17/19","Metric": "VidPT","Score": 7},
  {"Week": "03/24/19","Metric": "Performance","Score": 4},
  {"Week": "03/24/19","Metric": "Pain & Range of Motion","Score": 5},
  {"Week": "03/24/19","Metric": "Consistency","Score": 6},
  {"Week": "03/24/19","Metric": "Improvement","Score": 7},
  {"Week": "03/24/19","Metric": "VidPT","Score": 8}
  ]
};

      <VegaLite spec={spec} data={barData} />
      */
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


        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10, paddingBottom: 15}}>Progress Chart</Text>
        <Card>
          <Image source={require('../progressplaceholder.png')} style={{alignSelf: 'center', height: 175, width:350}}/>
        </Card>


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
