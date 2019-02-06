/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 const workout = [
  {
     name: 'Clamshell',
     num: 1,
     avatar: 'https://i.ytimg.com/vi/m7RyKQV4XhE/maxresdefault.jpg',
  },
  {
    name: 'Lateral Leg Raises',
    num: 2,
    avatar: "https://st1.thehealthsite.com/wp-content/uploads/2016/12/standing-leg-stretches-vs-lying-down-THS-655x353.jpg",
  },
  {
    name: 'VMO Exercise',
    num: 3,
    avatar: "https://www.ghtraining.co.uk/perch/resources/staright-leg-raise.jpg",
  }
 ]

import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Card, ListItem, Avatar, List} from 'react-native-elements';


class WorkoutScreen extends Component {
  constructor(props){
    super(props)
    this.state ={
      count: 0
    }
  }



  _startWorkout(){
    alert("workout beginning");
  }

  static navigationOptions = {
    header: null,
  }

  _newUser = () =>{
      this.props.navigation.navigate('DoWorkout');
  }

  /// format number image exercise_name
  ///               keep the image as an avatar?
  /*
  <Text>{item.num}</Text>
  <Avatar
    key = {key}
    xlarge
    source={{uri: item.avatar}}
  />
  */


  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#111d53'}}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Workout</Text>


        <List containerStyle={{marginBottom: 20}}>
        {
          workout.map((item, key)=>(
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={{uri: item.avatar}}
                style={{width: 150, height: 100}} />
              <Text key = {key} style={{fontSize:20, paddingTop:15, paddingRight: 25}}>{item.name}</Text>
              </View>

          ))
      }
        </List>


        <TouchableOpacity onPress = {this._newUser} style={{paddingLeft: 150}}>
                <View style = {{backgroundColor: '#ff4858', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 15,
                                width: 100, height: 30}}
                       >
                    <Text style = {{color: 'white', fontSize:20, fontWeight:'bold'}}>Begin</Text>
                </View>
            </TouchableOpacity>



      </ScrollView>

    );
  }
}



export default WorkoutScreen;
