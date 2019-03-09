/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


var screenheight = Dimensions.get('window').height;
var screenwidth = Dimensions.get('window').width;


class CompletedWorkout extends Component{


  //var screenheight = Dimensions.get('window').height;
    //console.log(width, height)

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} style={{color:tintColor}}/>
    ),
    tabBarOptions: {
      activeBackgroundColor: '#1c7ef8',
      activeTintColor: '#1aecb7',
      inactiveBackgroundColor: '#1c7ef8',
      inactiveTintColor: 'white'
    }
  }
//should display your points and streaks and the start button


  render(){
    return(
      <ScrollView style={styles.container}>

        <View style={styles.top}>
        <Text style={styles.welcome}> Welcome, Jane! </Text>

          <Image resizeMode='cover' source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
          style={styles.image}/>
        </View>

        <View style={styles.stats}>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Streak</Text>
            <Icon name="md-flame" size={45} color="#ff4858"/>
            <Text style={{fontSize: 15}}>5 days </Text>
            </View>
          </Card>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Points</Text>
            <Icon name="md-ribbon" size={45} color="gold"/>
            <Text style={{fontSize: 15}}>235</Text>
            </View>
          </Card>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Phase</Text>
            <Icon name="md-fitness" size={45} color="grey"/>
            <Text style={{fontSize: 15}}>Stage 1</Text>
            </View>
          </Card>
        </View>

        <View style={styles.stats} style={{paddingBottom:15}}>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontWeight:'bold', fontSize: 20}}> Goal </Text><Text style={{fontSize:15}}>I want to run the Disney half-marathon. </Text>
            </View>
          </Card>
        </View>


      </ScrollView>
    );

  }
}


export default CompletedWorkout;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111d53',
  },
  image:{
      width: screenwidth*.5,
      height: screenwidth*.5,
      borderRadius:100,
      borderWidth:4
  },
  top:{
    height: screenheight*.45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111d53',
    flex: 1,
    padding: 15,
  },
  stats:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom:{
    height: screenheight*.15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30,
    paddingLeft:10,
    paddingRight:10,
    flex: 1,
    backgroundColor: 'white'
  },
  statscont:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome:{
    fontSize: 40,
    color: '#19d6ad',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  }
  });
