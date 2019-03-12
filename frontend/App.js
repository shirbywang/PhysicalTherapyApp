/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation"
import MainScreen from './MainScreen'
import SetupScreen from './screens/SetupScreen'
import ChooseInjuryScreen from './screens/ChooseInjury'
import InjurySurveyScreen from './screens/InjurySurvey'
import FinishSurveyScreen from './screens/FinishSurveyScreen'
import Icon from 'react-native-vector-icons/dist/Ionicons';

//will probably need to create a state to update and collect info

class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  _returningUser = () =>{
      this.props.navigation.navigate('Main');
  }

  _newUser = () =>{
      this.props.navigation.navigate('ChooseInjury');
  }

  _createAccount = () =>{
      this.props.navigation.navigate('Setup');
  }

  /*
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
  */

  render() {
    return (
      <View style={{flex: 1}}>


        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./logo.png')}/>
          <Text>tools that accelerate injury recovery</Text>
        </View>


        <KeyboardAvoidingView style={styles.container}>
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={this._returningUser} style={{backgroundColor:'#25ace3', borderRadius: 15,width: 180, height: 30}}>
              <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:20}}>Login</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

        <View style={{alignItems:'center'}}>
        <Text> Forgot your login? Get Help here</Text>

        <Text style={{paddingTop:10}}>-----Or----</Text>
        </View>

        <View style={{flexDirection:'row', padding:20}}>
          <TouchableOpacity onPress={this._returningUser} style={{flexDirection:'row', paddingRight:20}}>
            <Icon name="logo-facebook" color='#3b5998' size={30}/>
            <Text style={{fontSize:15, fontWeight:'bold', paddingLeft:10}}>Log in with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._returningUser} style={{flexDirection:'row'}}>
            <Icon name="logo-googleplus" color='#ea4335' size={30}/>
            <Text style={{fontSize:15, fontWeight:'bold', paddingLeft:10}}>Log in with Google</Text>
          </TouchableOpacity>
        </View>



        <Button onPress={this._createAccount} title="Don't have an account? Sign up"/>
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
    InjurySurvey: InjurySurveyScreen,
    FinishSurvey: FinishSurveyScreen,
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    padding:20
  },
  input: {
    height:40,
    backgroundColor: '#efefef',
    marginBottom: 20,
    color:'black',
    paddingHorizontal: 10
  }
  })
