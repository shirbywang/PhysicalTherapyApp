/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
     title: 'crunch'
  },
  {
    name: 'katie',
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
    title: 'pushup'
  }
 ]

import React, {Component} from 'react';
import {Text, View, Button, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Card, ListItem, Avatar, List} from 'react-native-elements';

/*class WorkoutStart extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold'}}>Workout </Text>
      </View>
    );
  }
}*/

class WorkoutScreen extends Component {

  _startWorkout(){
    alert("workout beginning");
  }

  /*<FlatList
    data={[{key: 'a'}, {key: 'b'}]}
    renderItem={({item}) => <Text>{item.key}</Text>}
  />

  <Card containerStyle={{padding: 0}} >
   {
     users.map((u, i) => {
       return (
         <ListItem
           key={i}
           roundAvatar
           title={u.name}
           avatar={{uri:u.avatar}}
           chevron
         />
       );
     })
   }
 </Card>*/

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-stopwatch" size={25} style={{color: tintColor}}/>
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
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Workout</Text>

        <List containerStyle={{marginBottom: 20}}>
        {
          users.map((item, key)=>(
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Avatar
                key = {key}
                large
                source={{uri: item.avatar}}
                onPress={() => console.log("Works!")}
              />
              <Text key = {key}>{item.title}</Text>
              </View>
          ))
      }
        </List>


        <TouchableOpacity onPress = {this._startWorkout}>
                <View style = {{backgroundColor: '#ff4858', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 15,
                                width: 100, height: 30}}
                       >
                    <Text style = {{color: 'white', fontSize:15, fontWeight:'bold'}}>Start Workout</Text>
                </View>
            </TouchableOpacity>



      </View>

    );
  }
}

export default WorkoutScreen;
