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
     reps: '2 x 20 reps'
  },
  {
    name: 'Lateral Leg Raises',
    avatar: "https://st1.thehealthsite.com/wp-content/uploads/2016/12/standing-leg-stretches-vs-lying-down-THS-655x353.jpg",
    reps: '2 x 15 reps'
  },
  {
    name: 'VMO Exercise',
    avatar: "https://www.ghtraining.co.uk/perch/resources/staright-leg-raise.jpg",
    reps: '2 x 10 reps'
  }
 ]

import React, {Component} from 'react';
import {Text, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Card, ListItem, Avatar, List} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class DoWorkoutScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  }

//show image of Workout, description below, complete workout Button, maybe a next Button
//if the user clicks next
//reload the page with the next exercise content

  loadNextMove(){
    alert('next move')
  }



  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 22}}>{users[0].name} </Text>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 22}}>{users[0].reps} </Text>
        <Card>
          <Image source={{uri: users[0].avatar}}
            style={{width: 350, height: 200}} />
        </Card>
        <Card>
          <Text>Description</Text>
        </Card>
        <Card>
          <Text>Up Next:</Text>
          <Button onPress={this.loadNextMove} title="Next Move" color="#841584"  accessibilityLabel="Learn more about this purple button"/>
          <List containerStyle={{marginBottom: 20}}>
          {
            users.map((item, key)=>(
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text key = {key} style={{fontSize:20, paddingTop:15, paddingRight: 25}}>{item.name}</Text>
                </View>

            ))
        }
          </List>
        </Card>
      </ScrollView>
    );
  }
}



export default DoWorkoutScreen;
