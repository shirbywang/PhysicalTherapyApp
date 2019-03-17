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
     avatar: <Image source={require('../videos/clamshell.gif')}
                   style={{width: 350, height: 200}} />,
     sets: 2,
     reps: 20,
     reminders: "-Lie on your side; keep knees bent at 90 degree angle.\n-Raise your top knee up as high as can without moving your pelvis.\n- Pause at top (peak) for a second, then lower knee back down to starting position.\n- Remember to keep your feet together during the movement.\n- Don't lean back; keep your bottom leg still.\n- The movement is slow and controlled. Don't rush it.",
   },
  {
    name: 'Lateral Leg Raises',
    avatar: <Image source={require('../videos/legraises.gif')}
                  style={{width: 350, height: 200}} />,
    sets: 2,
    reps: 15,
    reminders: "-Lie on your side with legs in line with body.\n-Move top leg back approximately 20-30 degrees.\nBend bottom leg to provide balance and support.\n-Top leg is straight and is foot is engaged, toes are pointing back towards you.\n-Lift the top leg up, pause at peak, then lower leg down.\nMovement is slow. Don't rush it."
  },
  {
    name: 'VMO Exercise',
    avatar: <Image source={require('../videos/vmo.gif')}
                  style={{width: 350, height: 200}} />,
    sets: 2,
    reps: 10,
    reminders:"-Sit up straight with your legs out in front of you.\n-Place your back against wall for support, if desired.\n-Engage your right leg by pulling your foot towards you.\n-VMO should fire immediately, helping to protect the knee.\n-Raise leg about 30 degrees (keeping your leg straight).\n-Hold for 3-5 seconds and then slowly lower the right leg down.\n-Movement is controlled. Don't rush it."
  },
    {name: 'Lateral Sidesteps with Band',
    avatar: <Image source={require('../videos/lateralsidestep.gif')}
                  style={{width: 350, height: 200}} />,
    sets: 1,
    reps: 10,
    reminders:"-Place green band around the balls of your feet.\n-Keep legs straight the entire time.\n-Take a step to the right; no wider than shoulders.\n-Once right foot is planted, left foot takes small step to the right.\n-There is a slight pause in the movement. Trailing foot waits until the lead foot is planted."
  },
  {name: 'Single Leg Quarter Squats "Step Downs"',
  avatar: <Image source={require('../videos/singlelegquarter.gif')}
                style={{width: 350, height: 200}} />,
  sets: 2,
  reps: 10,
  reminders: "-Both legs are straight, body is balanced, and stand on a step/box/street curb.\n-Engage the left leg by pressing the left foot into step and then slightly lift the right foot.\n-Slowly lower the right leg to the ground while also pushing your hips slightly backwards. (Movement is back and down at the same time.)\n-Once right foot touches ground, immediately start back up to your initial starting position.\n-Movement back up is driven by firing your left glute and strongly pressing your left foot into the step/box/street curb."
  },
  {name: 'Hamstring Stretch',
  avatar: <Image source={require('../videos/hamstringstretch.gif')}
                style={{width: 350, height: 200}} />,
  sets: 2,
  reps: 10,
  reminders: "-Lie on your back.\n-Pull right foot back towards you and contract the VMO.\n-Lift the leg to approximately 50-60 degrees.\n-Assist leg by gently pulling your leg towards you with your hands.\n-Hand positioning is ideally above the knee; if that's too high then put hands below your knee, but not behind it.\n-Hold at peak for approximately 3-5 seconds and then slowly lower the leg back down and repeat the stretch"
  },
  {name: 'Hip Flexor Stretch',
  avatar: <Image source={require('../videos/hipflexorstretch.gif')}
                style={{width: 350, height: 200}} />,
  sets: 1,
  reps: '10-20 seconds',
  reminders: " Initial starting lunge pose [hold for 10-20 seconds]\n-Knee placed on ground is positioned slightly back; angle is greater than 90 degrees.\n-Accentuate the stretch by pressing your hands into the front knee.\n-Raising arm enables you to get deeper into the stretch."
  },
  {name: 'Cross-Over Stretch',
  avatar: <Image source={require('../videos/crossoverstretch.gif')}
                style={{width: 350, height: 200}} />,
  sets: 1,
  reps: '30 seconds',
  reminders:"-Leg that crosses in front leads the stretch.\n-Go slow and get body properly aligned before reaching arm over.\nExample: If right leg crosses in front of left leg then torso and upper body bend over to the right.\nImportant to bend your knees since flexion increases the stretch.\nExample (continued): Extend your left arm over the top. Helps to accentuate the stretch and aids in opening the chest cavity.\nHead positioning: Can look up at arm, or down at the ground. Find the position that is most comfortable for your head and neck."
  },
 ]

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {Card, ListItem, Avatar, List} from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';


 const list = users.length;

class DoWorkoutScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  }

  constructor (props) {
   super(props)
   //set the state to the first object in the list
   this.state = {
    name:users[0].name,
    index: 1,
  	sets: users[0].sets,
  	reps: users[0].reps,
    reminders: users[0].reminders,
    media:         <Image source={require('../videos/clamshell.gif')}
                  style={{width: 350, height: 200}} />,
    next: 'Lateral Leg Raises',
    total: list,
   }
 }



//show image of Workout, description below, complete workout Button, maybe a next Button
//if the user clicks next
//reload the page with the next exercise content

renderViewMore(onPress){
      return(
        <Text onPress={onPress} style={{fontWeight:'bold'}}>View more</Text>
      )
    }

renderViewLess(onPress){
      return(
        <Text onPress={onPress} style={{fontWeight:'bold'}}>View less</Text>
      )
    }

  loadNextMove = ()=>{

    if (this.state.index+1 > list){
      this.props.navigation.navigate('PostWorkoutSurvey');
    }

    else if (this.state.index < list){
       //change id
      //changing exercise
      this.setState({name: users[this.state.index].name})
      this.setState({sets: users[this.state.index].sets})
      this.setState({reps: users[this.state.index].reps})
      this.setState({reminders: users[this.state.index].reminders})
      this.setState({media: users[this.state.index].avatar})

      if (this.state.index+1 < list){
        this.setState({next: users[this.state.index+1].name})
        }
      else if (this.state.index+1 == list){
        this.setState({next: "Complete Workout"})
      }

      return this.setState({index: this.state.index+1})
    }

  }

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
          </View>
        </View>

        <View>
        </View>

        <View>
          <Card>
            {this.state.media}
          </Card>
        </View>


        <View>
          <Card>
            <Text style={{fontSize: 15,fontWeight:'bold'}}>Description: </Text>
            <ViewMoreText
                numberOfLines={3}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                textStyle={{textAlign: 'center'}}>
                <Text>
                  {this.state.reminders}
                </Text>
        </ViewMoreText>
          </Card>
        </View>
        <View>
          <Card>
            <Text>Coming Up:</Text>
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
