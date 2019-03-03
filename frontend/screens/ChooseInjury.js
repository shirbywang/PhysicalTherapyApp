import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppNavigator } from "react-navigation"
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { List, ListItem, Separator} from 'native-base';
import { CheckBox } from 'react-native-elements';
import InjurySurveyScreen from './InjurySurvey';

class ChooseInjuryScreen extends React.Component{

  constructor (props) {
     super(props)
     this.state = {
       chosenInjury: ''
     }
  }

  handleSubmit = () => {
    if (this.state.chosenInjury === ''){
      alert("Please choose your injury!")
      
    }
    else{
      this.props.navigation.navigate('InjurySurvey', {chosenInjury : this.state.chosenInjury});
    }

   }

render() {
  return (

    <View>

        <Text>What is your injury?</Text>
      <Collapse>
        <CollapseHeader>
          <Separator bordered>
           <Text>Leg</Text>
          </Separator>
        </CollapseHeader>
        <CollapseBody>
          <ListItem>

        <CheckBox
          title = "IT Band Syndrome"
          checked = {this.state.chosenInjury === "IT Band Syndrome"}
          onPress={() => this.setState({chosenInjury: "IT Band Syndrome"})}
        />

          </ListItem>

          <ListItem>

        <CheckBox
          title = "IT Band Syndrome"
          checked = {this.state.chosenInjury === "IT Band Syndrome"}
          onPress={() => this.setState({chosenInjury: "IT Band Syndrome"})}
        />

          </ListItem>
        </CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseHeader>
          <Separator bordered>
           <Text>Back</Text>
          </Separator>
        </CollapseHeader>
        <CollapseBody>
          <ListItem>

        <CheckBox
          title = "IT Band Syndrome"
          checked = {this.state.chosenInjury === "IT Band Syndrome"}
          onPress={() => this.setState({chosenInjury: "IT Band Syndrome"})}
        />

          </ListItem>
          <ListItem>

        <CheckBox
          title = "IT Band Syndrome"
          checked = {this.state.chosenInjury === "IT Band Syndrome"}
          onPress={() => this.setState({chosenInjury: "IT Band Syndrome"})}
        />

          </ListItem>
        </CollapseBody>
      </Collapse>


    <Button
      onPress={this.handleSubmit}
      title="Next"
      color='rgb(34, 172, 227)'
    />
      </View>
  );
}

} export default ChooseInjuryScreen;
