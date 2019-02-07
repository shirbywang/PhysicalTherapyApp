import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator, createAppNavigator } from "react-navigation"
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { List, ListItem, Separator} from 'native-base';
import InjurySurveyScreen from './InjurySurvey';


class ChooseInjuryScreen extends React.Component{

render(){
    return(
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
            <Text>Plantar Fasciitis</Text>
          </ListItem>
          <ListItem>
            <Text>IT Band Syndrome</Text>
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
            <Text>Back Problem 1</Text>
          </ListItem>
          <ListItem>
            <Text>Being Old</Text>
          </ListItem>
        </CollapseBody>
      </Collapse>



    <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('InjurySurvey')} title = "Next">
    <Text> Next </Text>
    </TouchableOpacity>

    </View>

    )

}

} export default ChooseInjuryScreen;
