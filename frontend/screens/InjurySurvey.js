import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Slider, ScrollView, Button } from 'react-native';
import { List, ListItem, CheckBox } from 'react-native-elements';

class InjurySurveyScreen extends React.Component{

  constructor (props) {
     super(props);
     this.state = {
        q1: '',
        q2: 0,
        q3: '',
        q4 : '',
        goal: '',
        data: ''
     }
  }


   bucket_weights = {
    q1: {"A":10, "B":6, "C":4, "D": 0, "E": 16, "F": 20, "G": 16}, 
    q3: {"A":6, "B":4, "C":10, "D": 4},
    q4: {"Y":0, "N":10, "M": 5},
    basic: 81,
    moderate: 62,
   }

   handlePainValue = (value) => {
    this.setState({q2 : parseFloat(value)})
   }

   handleGoal = (text) => {
      this.setState({ goal: text })
   }


   async submitAnswers(){

    if (this.state.q1 === '' ||
        this.state.q3 === '' ||
        this.state.q4 === '' ||
        this.state.goal === '' ){
      alert("Please fill out all fields!")
      
    }

    else{

      // hardcoded bucketing logic

      var value = 0
      value = this.bucket_weights.q1[this.state.q1]
      value += this.state.q2 * 2
      value += this.bucket_weights.q3[this.state.q3]
      value += this.bucket_weights.q4[this.state.q4]

      var phase = 3

      if (value > this.bucket_weights.basic){
          phase = 1
      }

      else if (value > this.bucket_weights.moderate){
          phase = 2
      }

      else if (this.state.q1 === "D"){
        alert("Based on your survey response you are likely suffering from sciatica. The following routine focuses on IT band syndrome. We highly recommend you see a physical therapist or myofascial specialist for your condition. Also, it is always prudent to consult your doctor before starting a new exercise regimen. That being said, we can offer you the following tips and stretches/exercises that may reduce the pain and help combat your condition.")
        phase = 1
      }

        const fetch = require("node-fetch");
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const getData = async url => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ data: json });
            // alert("yello " + JSON.stringify(this.state.data))
          } catch (error) {
            alert(error);
            console.log(error);
          }
        };

        getData(url).then(() => {
          this.nextPage();
    });

      }

   }

   nextPage(){
      this.props.navigation.navigate('FinishSurvey', {data : this.state.data});
   }

render(){

    return(
        <ScrollView>
        <Text style={{fontSize : 20, fontWeight: "bold", color: "rgb(34, 172, 227)"}}>

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

          <Text>Balance Test: Can you stand on your bad leg for 10 seconds while keeping your pelvis nice and balanced?</Text>

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
          <CheckBox
            title = "I can do about 5 seconds"
            checked = {this.state.q4 === "M"}
            onPress={() => this.setState({q4: "M"})}
          />



          <Text> What is your goal? </Text>
              <TextInput
                 underlineColorAndroid = "rgb(34, 172, 227)"
                 placeholder = "My goal is to be able to surf again!"
                 placeholderTextColor = 'rgb(34, 172, 227)'
                 autoCapitalize = "none"
                 onChangeText = {this.handleGoal}/>

        <Button
          style={{color: 'rgb(34, 172, 227)'}}
          onPress={() => this.submitAnswers(this.state.q1, this.state.q2, this.state.q3, this.state.q4, this.state.goal)}
          title="Create Workout"
        >
          Create Workout
        </Button>

    </ScrollView>
    );

}

} export default InjurySurveyScreen;