/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';


class SetupScreen extends Component {
//Creating a new account
//Ask for name, email, password, confirm password
//needs to pass the states over

constructor (props) {
  super(props)
  this.state = {
    url: this.props.navigation.state.params.url,
    name: '',
    email: '',
    password: ''
    }
  }

  _injuryscreen = () =>{
      this.props.navigation.navigate('ChooseInjury', {url: this.state.url, name: this.state.name, email: this.state.email, password: this.state.password});
  }

  _handleName = (text) =>{
      this.setState({ name: text })  
    }

  _handleEmail = (text) =>{
      this.setState({ email: text })  
    }

  _handlePassword = (text) =>{
      this.setState({ password: text })  
    }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{alignItems:'center', paddingTop:10}}>
          <Text style={{fontSize:35, fontWeight:'bold'}}>Create Account </Text>
        </View>


        <KeyboardAvoidingView style={styles.container}>

          <View>
            <Text>Name: </Text>
            <TextInput
              style={styles.input}
              onChangeText = {this._handleName}
            />
          </View>

          <View>
            <Text>Email: </Text>
            <TextInput
              style={styles.input}
              onChangeText = {this._handleEmail}
            />
          </View>

          <View>
            <Text>Password: </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText = {this._handlePassword}
            />
          </View>

          <View>
            <Text> Confirm Password: </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
            />
          </View>

        </KeyboardAvoidingView>

        <Button onPress={this._injuryscreen} color='rgb(34, 172, 227)' title="Next Step: Injury Survey"/>

      </View>


    );
  }
}

export default SetupScreen;


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
