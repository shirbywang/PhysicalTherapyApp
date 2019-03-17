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
        data: '',
        phase: 0,
        week: 0,
        exercises: [],
        chosenInjury: this.props.navigation.state.params.chosenInjury,
        url: this.props.navigation.state.params.url,
        testurl: '',
        name: this.props.navigation.state.params.name,
        email: this.props.navigation.state.params.email,
        password: this.props.navigation.state.params.password,
     }
  }


  //hardcoded for IT Band
   bucket_weights = {
    q1: {"A":20, "B":12, "C":8, "D": 0, "E": 32, "F": 40, "G": 32}, 
    q3: {"A":18, "B":12, "C":30, "D": 12},
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
        this.state.q4 === ''){
      alert("Please fill out all fields!")
      
    }

    else{

      // hardcoded bucketing logic

      var value = 0
      value = this.bucket_weights.q1[this.state.q1]
      value += this.state.q2 * 16
      value += this.bucket_weights.q3[this.state.q3]
      value += this.bucket_weights.q4[this.state.q4]

      if (value > this.bucket_weights.basic){
        //basic routine
        this.setState({phase: 1})
      }

      else if (value > this.bucket_weights.moderate){
        //moderate routine
        this.setState({phase: 2})
      }

      else if (this.state.q1 === "D"){
        alert("Based on your survey response you are likely suffering from sciatica. The following routine focuses on IT band syndrome. We highly recommend you see a physical therapist or myofascial specialist for your condition. Also, it is always prudent to consult your doctor before starting a new exercise regimen. That being said, we can offer you the following tips and stretches/exercises that may reduce the pain and help combat your condition.")
        this.setState({phase: 1})
      }

      else{
        //advanced routine
        this.setState({phase: 3})
      }

        const getData = async url => {
          try {
            const fetch = require("node-fetch");
            const url = "http://" + this.state.url + ":8000/injury?name=PATELLOFEMORAL%20PAIN";
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ data: json });
            this.setState({ week : this.state.data[0]["phaseDuration"][this.state.phase]});
            this.setState({ exercises : this.state.data[0]["exerciseList"][parseFloat(this.state.week)-1]})
          } catch (error) {
            alert(error);
            console.log(error);
          }
        };

        getData().then(() => {this.nextPage();});

      }

   }

//UNTESTED
  async postUserInfotoDB(){

        userdata = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            streak: 0,
            points: 0,
            currentphase: this.state.phase,
            currentweek: this.state.data.phase,
            surveydata: {
              injury: this.state.chosenInjury,
              q1: this.state.q1,
              q2: this.state.q2,
              q3: this.state.q3,
              q4: this.state.q4,
              goal: this.state.goal,            }
          })
          }

   }

   nextPage(){
      this.props.navigation.navigate('FinishSurvey', {data : this.state.data, chosenInjury: this.state.chosenInjury, 
                                                      phase: this.state.phase, url: this.state.url,
                                                      week: this.state.week, exercises: this.state.exercises});
   }

render(){

    return(
        <ScrollView style={{paddingTop:10}}>

        <Text style={{fontSize:25, fontWeight:'bold', textAlign: "center"}}>

          Help us understand your IT Band injury! {"\n"} </Text>

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


      <Text> {"\n"} </Text>

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


      <Text> {"\n"} </Text>

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

      <Text> {"\n"} </Text>

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

      <Text> {"\n"} </Text>


          <Text> What is your goal? </Text>
              <TextInput
                 underlineColorAndroid = "rgb(34, 172, 227)"
                 placeholder = "My goal is to be able to surf again!"
                 placeholderTextColor = 'rgb(34, 172, 227)'
                 autoCapitalize = "none"
                 onChangeText = {this.handleGoal}/>


      <Text> {"\n"} </Text>

        <Button
          onPress={() => this.submitAnswers(this.state.q1, this.state.q2, this.state.q3, this.state.q4, this.state.goal)}
          title="Create Workout"
           color='rgb(34, 172, 227)'

        >
          Create Workout
        </Button>


      <Text> {"\n"} </Text>

    </ScrollView>
    );

}

} export default InjurySurveyScreen;

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