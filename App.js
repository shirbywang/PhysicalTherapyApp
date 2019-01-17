/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import {SocialIcon} from 'react-native-elements';


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const sty = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  }
  });

export default class StartPage extends Component{
  _login(){
    alert("login!");
  }

  _signUp(){
    alert("signup!");
  }


  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent:'center'}}>
          <Image source={require('./logo.png')} style={{alignSelf: 'center'}}/>
        </View>

        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={this._login}
        />

        <SocialIcon
          title='Sign In With Google'
          button
          type='google-plus-official'
        />

      </View>
    );

  }
}
