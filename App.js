/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';


export default class StartPage extends Component{
  _login(){
    alert("login!"); 
  }

  _signUp(){
    alert("signup!"); 
  }

  render(){
    return(
      <View>
        <View>
          <Text>VidPT App</Text>
        </View>
        <View>
          <Button
            onPress={this._login}
            title="Login"
          />
          <Button
            onPress={this._signUp}
            title="Sign Up"
          />
        </View>
      </View>
    );

  }
}
