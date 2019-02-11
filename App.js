/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation"
import MainScreen from './MainScreen'
import SetupScreen from './screens/SetupScreen'
import ChooseInjuryScreen from './screens/ChooseInjury'
import InjurySurveyScreen from './screens/InjurySurvey'

//will probably need to create a state to update and collect info

class LoginScreen extends React.Component {

  _returningUser = () =>{
      this.props.navigation.navigate('Main');
  }

  _newUser = () =>{
      this.props.navigation.navigate('ChooseInjury');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent:'center'}}>
          <Image source={require('./logo.png')} style={{alignSelf: 'center'}}/>
          <Text style={{paddingLeft:90}}>tools that accelerate injury recovery</Text>
        </View>

        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={this._returningUser}
        />

        <SocialIcon
          title='Sign In With Google'
          button
          type='google-plus-official'
          onPress={this._newUser}
        />

      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login:LoginScreen,
    Main: MainScreen,
    Setup: SetupScreen,
    ChooseInjury: ChooseInjuryScreen,
    InjurySurvey: InjurySurveyScreen
  }
);

export default createAppContainer(AppNavigator);
