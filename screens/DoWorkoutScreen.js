/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 const users = [
  {
     name: 'Clamshell',
     avatar: 'https://i.ytimg.com/vi/m7RyKQV4XhE/maxresdefault.jpg',
  },
  {
    name: 'Lateral Leg Raises',
    avatar: "https://st1.thehealthsite.com/wp-content/uploads/2016/12/standing-leg-stretches-vs-lying-down-THS-655x353.jpg",
  },
  {
    name: 'VMO Exercise',
    avatar: "https://www.ghtraining.co.uk/perch/resources/staright-leg-raise.jpg",
  }
 ]

import React, {Component} from 'react';
import {Text, View, Button, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Card, ListItem, Avatar, List} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class DoWorkoutScreen extends Component {
  static navigationOptions = {
    header: null,
  }

//show image of Workout, description below, complete workout Button, maybe a next Button
//if the user clicks next
//reload the page with the next exercise content



  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold'}}>Do Workout </Text>
        <Text style={{color:'white', fontWeight: 'bold'}}>{users[1].name} </Text>
      </View>
    );
  }
}



export default DoWorkoutScreen;
