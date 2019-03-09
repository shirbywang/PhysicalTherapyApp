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
import {Card, ListItem, Avatar, List, Tile} from 'react-native-elements';


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
          workout.map((item, key)=>(
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={{uri: item.avatar}}
                style={{width: 150, height: 100}} />
              <Text key = {key} style={{fontSize:20, paddingTop:15, paddingRight: 25}}>{item.name}</Text>
              </View>

          ))
      }
        </List>




      </ScrollView>

    );
  }
}



export default WorkoutScreen;
