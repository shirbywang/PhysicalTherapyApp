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


class SetupScreen extends Component {

  /*static navigationOptions = {
    header: (<View></View>),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-chatboxes" size={25} style={{color: tintColor}}/>
    )
  }*/

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Setup </Text>
      </View>

    );
  }
}

export default SetupScreen;
