/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class ProfileScreen extends Component{

static navigationOptions = {
  header: (<View></View>),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-contact" size={25} style={{color: tintColor}}/>
  )
}
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Profile Screen </Text>
      </View>

    );
  }
}

export default ProfileScreen;
