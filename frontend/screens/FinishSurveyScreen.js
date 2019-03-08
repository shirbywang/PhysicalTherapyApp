import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppNavigator } from "react-navigation"
import { List, ListItem, Separator} from 'native-base';
import { CheckBox } from 'react-native-elements';
import InjurySurveyScreen from './InjurySurvey';

class FinishSurveyScreen extends React.Component{

  constructor (props) {
     super(props);
     this.state = {
      data : this.props.navigation.state.params.data
     }
  }

   nextPage(){
      this.props.navigation.navigate('Main');
   }

render() {

  const data = this.state.data
  const basic = <Text>It looks like you are in early stages of your injury. {"\n"} We recommend this routine:</Text>         
  const moderate = <Text>It looks like you are in mid stages of your injury. {"\n"} We recommend this routine:</Text>  
  const advanced = <Text>It looks like you are in late stages of your injury. {"\n"} We recommend this routine:</Text>  

  let message;
  if (data.id === 1) {
      message = basic
  } else {
      message = moderate
  }

  return (

    <View>

        <Text style={{fontSize : 20, fontWeight: "bold", color: "rgb(34, 172, 227)"}}>Thank you for taking our survey! </Text>
        <Text>{message}</Text>
        <Text>{data.title}{"\n"}</Text>
        <Button
          onPress={() => this.nextPage()}
          title="Start my Physical Therapy Journey!"
          color='rgb(34, 172, 227)'
        />

     </View>
  );
}

} export default FinishSurveyScreen;
