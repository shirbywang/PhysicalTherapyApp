/**
 * THIS IS THE MAIN WORKOUT SCREEN. USERS CAN VIEW A LIST OF EXERCISES BEFORE STARTING THEIR ROUTINE.
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Card, ListItem, Avatar, List, Tile} from 'react-native-elements';


const workout = [
 {
    name: 'Clamshell',
    avatar:<Image source={require('../videos/preview/clamshellss.png')}
           style={{width: 150, height: 100}} />,
 },
 {
   name: 'Lateral Leg Raises',
   avatar: <Image source={require('../videos/preview/legraisesss.png')}
          style={{width: 150, height: 100}} />,
 },
 {
   name: 'VMO Exercise',
   avatar: <Image source={require('../videos/preview/vmoss.png')}
          style={{width: 150, height: 100}} />,
 },
 {
   name: 'Lateral Sidesteps \nwith Band',
   avatar: <Image source={require('../videos/preview/lateralsidestepss.png')}
                 style={{width: 150, height: 100}} />,
 },
 {
   name: 'Single Leg Quarter \nSquats',
   avatar: <Image source={require('../videos/preview/singlequarterss.png')}
                 style={{width: 150, height: 100}} />,
 },
 {
   name: 'Hamstring Stretch',
   avatar: <Image source={require('../videos/preview/hamstringss.png')}
                 style={{width: 150, height: 100}} />,
 },
 {
   name: 'Hip Flexor Stretch',
   avatar: <Image source={require('../videos/preview/hipflexorss.png')}
                 style={{width: 150, height: 100}} />,
 },
 {
   name: 'Cross-Over Stretch',
   avatar: <Image source={require('../videos/preview/crossoverss.png')}
                 style={{width: 150, height: 100}} />,
 },
]

class WorkoutScreen extends Component {


  static navigationOptions = {
    header: null,
  }


  _newUser = () =>{
      this.props.navigation.navigate('DoWorkout');
  }

  /// format number image exercise_name
  ///               keep the image as an avatar?



  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#111d53'}}>
      <Tile
        imageSrc={require('../wo_tile.jpg')}
        title="IT Band Syndrome Workout"
        featured
        caption="Begin"
        captionStyle={{fontSize:20, fontWeight:'bold', backgroundColor:'#ff4858', borderRadius: 15,width: 100, height: 30}}
        onPress = {this._newUser}

        />

        <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, paddingTop: 25, paddingLeft: 10}}>Workout</Text>


        <List containerStyle={{marginBottom: 20}}>
        {
          workout.map((item)=>(
            <View key={item} style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              {item.avatar}
              <Text style={{fontSize:20, paddingTop:15, paddingRight: 25}}>{item.name}</Text>
              </View>

          ))
      }
        </List>




      </ScrollView>

    );
  }
}



export default WorkoutScreen;
