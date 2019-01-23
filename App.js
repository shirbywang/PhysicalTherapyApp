/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation"
import MainScreen from './MainScreen'

//will probably need to create a state to update and collect info

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent:'center'}}>
          <Image source={require('./logo.png')} style={{alignSelf: 'center'}}/>
        </View>

        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={() => this.props.navigation.navigate('Main')}
        />

        <SocialIcon
          title='Sign In With Google'
          button
          type='google-plus-official'
          onPress={this._login}
        />

      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login:LoginScreen,
    Main: MainScreen,
  }
);

export default createAppContainer(AppNavigator);
