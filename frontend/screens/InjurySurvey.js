import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Slider, ScrollView } from 'react-native';
import { List, ListItem, CheckBox } from 'react-native-elements';

class InjurySurveyScreen extends React.Component{

   state = {
      injury: this.props.navigation.state.params.chosenInjury,
      q1: '',
      q2: 1,
      q3: '',
      q4 : '',
      q5 : '',
      goal: '',

   }

    handlePainLocation = (text) => {
      this.setState({q1: text})
    }

    handlePainValue = (value) => {
      this.setState({q2: parseFloat(value)})
    }

   handleGoal = (text) => {
      this.setState({ goal: text })
   }

   submitAnswers = (answer1, answer2, answer3, answer4, answer5, goal) => {
      alert('answer1 ' + this.state.q1 + ' answer2 ' + this.state.q2
        + ' answer3 ' + this.state.q3 + ' answer4 ' + this.state.q4 + ' answer5 ' 
        + this.state.q5 + ' injury ' + this.state.injury)
      this.props.navigation.navigate('Main');

   }

render(){

    return(
        <ScrollView>
        <Text style={{fontWeight: "bold", color: "rgb(34, 172, 227)"}}>
        Help us understand your {this.props.navigation.state.params.chosenInjury} injury! {"\n"} </Text>


        <Text> Question 1: Where is your pain located?</Text>

        <CheckBox
          title = "A. Outside part of your knee (lateral femoral epicondyle) and your hip"
          checked = {this.state.q1 === "A"}
          onPress={() => this.setState({q1: "A"})}
        />
        <CheckBox
          title = "B. Outside part of the thigh"
          checked = {this.state.q1 === "B"}
          onPress={() => this.setState({q1: "B"})}
        />
        <CheckBox
          title = "C. Front part of the knee"
          checked = {this.state.q1 === "C"}
          onPress={() => this.setState({q1: "C"})}
        />
        <CheckBox
          title = "D. Lower back by your sacrum and the pain radiates down your leg"
          checked = {this.state.q1 === "D"}
          onPress={() => this.setState({q1: "D"})}
        />
        <CheckBox
          title = "E. Both A & B"
          checked = {this.state.q1 === "E"}
          onPress={() => this.setState({q1: "E"})}
        />
        <CheckBox
          title = "F. A, B & C"
          checked = {this.state.q1 === "F"}
          onPress={() => this.setState({q1: "F"})}
        />
        <CheckBox
          title = "G. A, B & D"   
          checked = {this.state.q1 === "G"}
          onPress={() => this.setState({q1: "G"})}
        />

        <Text>Question 2: What is your Pain Level?</Text>
        <Slider
          step={1}
          maximumValue={5}
          value={this.state.q2}
          onValueChange={this.handlePainValue}
          thumbTintColor='rgb(34, 172, 227)'
          maximumTrackTintColor='#d3d3d3' 
          minimumTrackTintColor='rgb(34, 172, 227)'
        />
        <Text style={{textAlignVertical: "center",textAlign: "center",}}>{this.state.q2}</Text>

        <Text>Question 3: When is your pain the worst?</Text>

        <CheckBox
          title = "A. Going up and down stairs"
          checked = {this.state.q3 === "A"}
          onPress={() => this.setState({q3: "A"})}
        />
        <CheckBox
          title = "B. After running and strenuous activities such as cycling, cross-fit, and hiking"
          checked = {this.state.q3 === "B"}
          onPress={() => this.setState({q3: "B"})}
        />
        <CheckBox
          title = "C. Hurts all day long and I can’t stop thinking about it"
          checked = {this.state.q3 === "C"}
          onPress={() => this.setState({q3: "C"})}
        />
        <CheckBox
          title = "D. Just feels like little needle pricks on the outside part of your knee"
          checked = {this.state.q3 === "D"}
          onPress={() => this.setState({q3: "D"})}
        />

        <Text>Question 4: When in line for coffee do you shift your weight to one leg and potentially lock that leg or is your weight distributed equally to
both legs?</Text>

        <CheckBox
          title = "Yes"
          checked = {this.state.q4 === "Y"}
          onPress={() => this.setState({q4: "Y"})}
        />
        <CheckBox
          title = "No"
          checked = {this.state.q4 === "N"}
          onPress={() => this.setState({q4: "N"})}
        />

        <Text>Balance Test: Can you stand on your bad leg for 10 seconds while keeping your pelvis nice and balanced?</Text>

        <CheckBox
          title = "Yes"
          checked = {this.state.q5 === "Y"}
          onPress={() => this.setState({q5: "Y"})}
        />
        <CheckBox
          title = "No"
          checked = {this.state.q5 === "N"}
          onPress={() => this.setState({q5: "N"})}
        />




        <Text> What is your goal? </Text>
            <TextInput
               underlineColorAndroid = "rgb(34, 172, 227)"
               placeholder = "My goal is to be able to surf again!"
               placeholderTextColor = 'rgb(34, 172, 227)'
               autoCapitalize = "none"
               onChangeText = {this.handleGoal}/>

            <TouchableOpacity
               onPress = {
                  () => this.submitAnswers(this.state.q1, this.state.q2, this.state.q3, this.state.q4, this.state.q5, this.state.goal)
               }>
               <Text> Submit Answers </Text>
            </TouchableOpacity>

        </ScrollView>
    )

}

} export default InjurySurveyScreen;