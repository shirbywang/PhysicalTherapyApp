import React, {Component} from 'react';
import {Text, View, Button, Image, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//will probably need to create a state to update and collect info

class LoginScreen extends React.Component {

constructor (props) {
  super(props)
  this.state = {
    url: this.props.navigation.state.params.url
    }
  }

  static navigationOptions = {
    header: null,
  }

  _returningUser = () =>{
      this.props.navigation.navigate('Main');
  }

  _createAccount = () =>{
      this.props.navigation.navigate('Setup', {url: this.state.url});
  }


/*
  _newUser = () =>{
      this.props.navigation.navigate('ChooseInjury');
  }

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
          <Image source={require('../logo.png')}/>
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

        <Button onPress={this._createAccount} color='rgb(34, 172, 227)' title="Don't have an account? Sign up"/>
      </View>

    );
  }
}

export default LoginScreen;



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
