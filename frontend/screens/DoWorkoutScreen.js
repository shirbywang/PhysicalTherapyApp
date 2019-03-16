/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 const users = [
  {
     name: 'Clamshell',
     avatar: 'https://i.ytimg.com/vi/m7RyKQV4XhE/maxresdefault.jpg',
     sets: 2,
     reps: 20,
     reminders: 'this'
  },
  {
    name: 'Lateral Leg Raises',
    avatar: "https://st1.thehealthsite.com/wp-content/uploads/2016/12/standing-leg-stretches-vs-lying-down-THS-655x353.jpg",
    sets: 2,
    reps: 15,
    reminders: 'is'
  },
  {
    name: 'VMO Exercise',
    avatar: "https://www.ghtraining.co.uk/perch/resources/staright-leg-raise.jpg",
    sets: 2,
    reps: 10,
    reminders: 'a test'
  }
 ]

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {Card, ListItem, Avatar, List} from 'react-native-elements';



 const list = users.length;

class DoWorkoutScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  }

  constructor (props) {
   super(props)
   this.state = {
     input: 'trying',
     name:'Clamshell',
     _id: 1,
  	sets: 2,
  	reps: 20,
  	reminders: 'remember to hold the exercise for about ...',
  	media: 'https://i.ytimg.com/vi/m7RyKQV4XhE/maxresdefault.jpg',
    next: 'Lateral Leg Raises',
    total: list,
   }
 }



//show image of Workout, description below, complete workout Button, maybe a next Button
//if the user clicks next
//reload the page with the next exercise content


/*users.length will give me the list of exercises in a Workout
_id: int,
	name: string,
	sets: int,
	reps: int,
	reminders: string
	media: string (to file path)

*/
  loadNextMove = ()=>{
    //var word = 'hello';
    if (this.state._id+1 > list){
      this.props.navigation.navigate('PostWorkoutSurvey');
    }

    else if (this.state._id < list){
       //change id
      //changing exercise
      this.setState({name: users[this.state._id].name})
      this.setState({sets: users[this.state._id].sets})
      this.setState({reps: users[this.state._id].reps})
      this.setState({reminders: users[this.state._id].reminders})
      this.setState({media: users[this.state._id].avatar})

      if (this.state._id+1 < list){
        this.setState({next: users[this.state._id+1].name})
        }
      else if (this.state._id+1 == list){
        this.setState({next: "Complete Workout"})
      }

      return this.setState({_id: this.state._id+1})
    }

  }


  /*
            {
              users.map((item, key)=>(
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text key = {key} style={{fontSize:20, paddingTop:15, paddingRight: 25}}>{item.name}</Text>
                  </View>

              ))
          }
  */

  render() {
    const { input } = this.state
    const { name } = this.state
    const { sets } = this.state
    const { reps } = this.state
    const { reminders } = this.state
    const { media } = this.state
    const { next } = this.state

    return (
      <ScrollView style={styles.container}>

        <View>
          <Text style={styles.exercise}>{this.state.name} </Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap',flex:1,}}>
            <Text style={styles.exercise}>{this.state.sets} x </Text>
            <Text style={styles.exercise}>{this.state.reps} reps </Text>

            <Text style={styles.exercise}>{this.state._id} reps </Text>



          </View>
        </View>

        <View>
        </View>

        <View>
          <Card>
            <Image source={require('../videos/clamshell.gif')}
              style={{width: 350, height: 200}} />
          </Card>
        </View>


        <View>
          <Card>
            <Text style={{fontSize: 15,fontWeight:'bold'}}>Description: </Text>
            <Text>{this.state.reminders}</Text>

          </Card>
        </View>
        <View>
          <Card>
            <Button onPress={this.loadNextMove} title={this.state.next} color="#841584"  accessibilityLabel="Learn more about this purple button"/>

          </Card>
        </View>


      </ScrollView>
    );
  }
}



export default DoWorkoutScreen;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111d53'
  },
  exercise:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 22
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
