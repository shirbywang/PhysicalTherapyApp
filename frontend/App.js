import React, {Component} from 'react';
import {Text, View, Button, Image, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './MainScreen';
import LoginScreen from './screens/LoginScreen';
import SetupScreen from './screens/SetupScreen';
import ChooseInjuryScreen from './screens/ChooseInjury';
import InjurySurveyScreen from './screens/InjurySurvey';
import FinishSurveyScreen from './screens/FinishSurveyScreen';
import SettingScreen from './screens/SettingScreen';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//will probably need to create a state to update and collect info

class StartScreen extends React.Component {

constructor (props) {
  super(props)
  this.state = {
    url: ''
    }
  }

  static navigationOptions = {
    header: null,
  }

  _submitURL = () =>{
      this.props.navigation.navigate('Login', {url: this.state.url});
  }

  _handleURL = (text) =>{
      this.setState({ url: text })
    }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{alignItems:'center', paddingTop:10}}>
          <Text style={{fontSize:35, fontWeight:'bold'}}> Welcome to VidPT! </Text>
        </View>

        <Text style={{fontSize:25, fontWeight:'bold',textAlign: "center"}}>
          Please enter IP Address for this Demo: </Text>

            <Text> Enter Demo URL: </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText = {this._handleURL}
        />

        <Button onPress={this._submitURL} color='rgb(34, 172, 227)' title="Let's Go!"/>
      </View>
    );
  }

}

const AppNavigator = createStackNavigator(
  {
    Start:StartScreen,
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
