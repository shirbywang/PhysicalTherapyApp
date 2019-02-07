import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class InjurySurveyScreen extends React.Component{

   state = {
      answer1: '',
      answer2: '',
      answer3: ''
   }

   handleAnswer1 = (text) => {
      this.setState({ answer1: text })
   }

   handleAnswer2 = (text) => {
      this.setState({ answer2: text })
   }

   handleAnswer3 = (text) => {
      this.setState({ answer3: text })
   }

   submitAnswers = (answer1, answer2, answer3) => {
      // alert('answer1 ' + answer1 + ' answer2 ' + answer2
      // 	+ ' answer3 ' + answer3)
      this.props.navigation.navigate('Main');

   }

render(){
    return(
        <View>
        <Text>Help us understand your injury</Text>
            <TextInput
               underlineColorAndroid = "rgb(34, 172, 227)"
               onChangeText = {this.handleAnswer1}/>

        <Text>Help us understand your injury</Text>
            <TextInput
               underlineColorAndroid = "rgb(34, 172, 227)"
               onChangeText = {this.handleAnswer2}/>

        <Text>What is your goal?</Text>
            <TextInput
               underlineColorAndroid = "rgb(34, 172, 227)"
               placeholder = "My goal is to be able to surf again!"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleAnswer3}/>

            <TouchableOpacity
               onPress = {
                  () => this.submitAnswers(this.state.answer1, this.state.answer2, this.state.answer3)
               }>
               <Text> Submit Answers </Text>
            </TouchableOpacity>

        </View>
    )

}

} export default InjurySurveyScreen;