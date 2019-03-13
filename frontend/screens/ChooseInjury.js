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
       chosenInjury: '',
       collapsed: false
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

    <View style={{paddingTop:10}}>

        <Text style={{fontSize:25, fontWeight:'bold',textAlign: "center"}}>What is your injury? {"\n"} </Text>
      <Collapse
        isCollapsed={this.state.collapsed}>
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
          onPress={() => this.setState({chosenInjury: "IT Band Syndrome",
                                        collapsed: true})}
        />

          </ListItem>

          <ListItem>

            <Text> Patellofemoral Syndrome </Text>

          </ListItem>
        </CollapseBody>
      </Collapse>


      <Text> {"\n"} </Text>
      
    <Button
      onPress={this.handleSubmit}
      title="Next"
      color='rgb(34, 172, 227)'
    />
      </View>
  );
}

} export default ChooseInjuryScreen;

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