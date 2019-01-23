/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class WorkoutScreen extends Component {

  static navigationOptions = {
    header: (<View></View>),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-stopwatch" size={25} style={{color: tintColor}}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Workout Screen </Text>
      </View>

    );
  }
}

export default WorkoutScreen;
