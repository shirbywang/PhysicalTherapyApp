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
      data : this.props.navigation.state.params.data,
      chosenInjury: this.props.navigation.state.params.chosenInjury,
      phase: this.props.navigation.state.params.phase,
      exercises: this.props.navigation.state.params.exercises,
     }
  }

   nextPage(){
      global.newuser=true;
      this.props.navigation.navigate('Main');
   }

render() {

  const exercises = this.state.exercises;
  const basic = <Text>It looks like you are in early stages of your injury. {"\n"}We recommend this routine:</Text>
  const moderate = <Text>It looks like you are in mid stages of your injury. {"\n"}We recommend this routine:</Text>
  const advanced = <Text>It looks like you are in late stages of your injury. {"\n"}We recommend this routine:{"\n"}</Text>

  let message;
  if (this.state.phase === 1) {
      message = basic
    }
  else if (this.state.phase === 2){
      message = moderate
    }
  else {
      message = advanced
  }

  return (

    <View>

        <Text>{"\n"}</Text>
        <Text style={{fontSize:25, fontWeight:'bold', textAlign: "center"}}>Thank you for taking our survey! </Text>
        <Text>{"\n"}</Text>

        <Text style={{fontSize:15, textAlign: "center"}}>{message}</Text>
        <Text>{"\n"}</Text>

         { exercises.map((item, key)=>(
         <Text style={{fontSize:15, textAlign: "center"}} key={key} > { item } </Text>)
         )}

        <Text>{"\n"}</Text>

        <Button
          onPress={() => this.nextPage()}
          title="Start my Physical Therapy Journey!"
          color='rgb(34, 172, 227)'
        />

    </View>
  );
}

} export default FinishSurveyScreen;

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
