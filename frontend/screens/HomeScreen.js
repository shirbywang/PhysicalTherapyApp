/**
 * THIS IS THE HOME SCREEN
 * IT SHOWS THE USER'S STATS (POINTS, STREAKS, PHASE) AND GOAL
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


var screenheight = Dimensions.get('window').height;
var screenwidth = Dimensions.get('window').width;

//load user information from the backend here

class HomeScreen extends Component{


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


  render(){
    const Newuser = <Image resizeMode='cover' source={{uri:'http://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png'}}style={styles.image}/>;

    const returninguser = <Image resizeMode='cover' source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}style={styles.image}/>;

    if (global.newuser){
      user = Newuser
      name = 'Victor'//name //whatever is passed from the survey screen
      streak =  global.newstreak//streak
      points = global.newpoints//Points
      phase = 1//Phase
      goal = 'I want to be able to surf again.'//Goal
    } else{
      user = returninguser
      name = 'Jane'//name //whatever is passed from the login screen
      streak =  global.returningstreak//streak
      points = global.returningpoints//Points
      phase = 1//Phase
      goal = 'I want to run the Disney half-marathon.'//Goal
    }

    return(
      <ScrollView style={styles.container}>

        <View style={styles.top}>
        <Text style={styles.welcome}> Welcome, {name}! </Text>

          {user}
        </View>

        <View style={styles.stats}>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Streak</Text>
            <Icon name="md-flame" size={45} color="#ff4858"/>
            <Text style={{fontSize: 15}}>{streak} days </Text>
            </View>
          </Card>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Points</Text>
            <Icon name="md-ribbon" size={45} color="gold"/>
            <Text style={{fontSize: 15}}>{points}</Text>
            </View>
          </Card>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Phase</Text>
            <Icon name="md-fitness" size={45} color="grey"/>
            <Text style={{fontSize: 15}}>Stage {phase}</Text>
            </View>
          </Card>
        </View>

        <View style={styles.stats} style={{paddingBottom:15}}>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontWeight:'bold', fontSize: 20}}> Goal </Text><Text style={{fontSize:15}}>{goal} </Text>
            </View>
          </Card>
        </View>


      </ScrollView>
    );

  }
}


export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111d53',
  },
  image:{
      width: screenwidth*.5,
      height: screenwidth*.5,
      borderRadius:100,
      borderWidth:4,
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
