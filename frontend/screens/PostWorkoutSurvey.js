import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Slider, ScrollView, Button } from 'react-native';
import { List, ListItem, CheckBox } from 'react-native-elements';

 const difficulty = ['Too Easy', "A Little Easy", "Just Right", "A Little Too Hard", "Way Too Difficult"]

class PostWorkoutSurveyScreen extends React.Component{

  static navigationOptions = {
    header: null,
  }

  constructor (props) {
     super(props);
     this.state = {
        q1: 0,
        q2: 0,
        q3: ''
     }
  }

   handleQ1 = (value) => {
    this.setState({q1 : parseFloat(value)})
   }

   handleQ2 = (value) => {
    this.setState({q2 : parseFloat(value)})
   }

   async submitAnswers(){
        const fetch = require("node-fetch");
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const getData = async url => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ data: json });
          } catch (error) {
            alert(error);
            console.log(error);
          }
        };

        getData(url).then(() => {
          this.nextPage();
    });

   }

   nextPage(){
      this.props.navigation.navigate('Completed');
   }

render(){

    return(
        <View>
        <Text style={{fontSize : 20, fontWeight: "bold", color: "rgb(34, 172, 227)"}}>

          Great job and congrats on completing your rehab routine today! {"\n"} </Text>

          <Text> 
                  Take your super quick check-up quiz 
                  It takes less than 20 seconds. We promise. {"\n"}
          </Text>

          <Text> 
           1. How do you feel about your current rehab routine?  {"\n"}
          </Text>

          <Slider
            step={1}
            maximumValue={4}
            value={this.state.q1}
            onValueChange={this.handleQ1}
            thumbTintColor='rgb(34, 172, 227)'
            maximumTrackTintColor='#d3d3d3' 
            minimumTrackTintColor='rgb(34, 172, 227)'
          />
          <Text style={{textAlignVertical: "center",textAlign: "center",}}>{difficulty[this.state.q1]} {"\n"} </Text>

          <Text>Question 2: What is your current pain level?</Text>
          <Slider
            step={1}
            maximumValue={10}
            value={this.state.q2}
            onValueChange={this.handleQ2}
            thumbTintColor='rgb(34, 172, 227)'
            maximumTrackTintColor='#d3d3d3' 
            minimumTrackTintColor='rgb(34, 172, 227)'
          />
          <Text style={{textAlignVertical: "center",textAlign: "center",}}>{this.state.q2}</Text>

          <Text> Thank you for your responses! We will track your progress in our "Progress" tab below! {"\n"} </Text>


        <Button
          style={{color: 'rgb(34, 172, 227)'}}
          onPress={() => this.submitAnswers(this.state.q1, this.state.q2, this.state.q3)}
          title="Submit Answers"
        >
          Submit Answers
        </Button>

    </View>
    );

}

} export default PostWorkoutSurveyScreen;