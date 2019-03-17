/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {Card, Tile} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Ionicons';



var screenheight = Dimensions.get('window').height;
var screenwidth = Dimensions.get('window').width;


class CompletedWorkout extends Component{


  //var screenheight = Dimensions.get('window').height;
    //console.log(width, height)

    static navigationOptions = {
      header: null,
    }

  home = () =>{
    this.props.navigation.navigate('ViewWorkout');
  }
//should display your points and streaks and the start button


  render(){
    if(global.newuser){
      global.newstreak=global.newstreak+1
      global.newpoints = global.newpoints+5
      streak = global.newstreak
      points = '+5'
    }
    else{
      global.returningstreak=global.returningstreak+1
      global.returningpoints = global.returningpoints+5
      streak = global.returningstreak
      points = '+5'
    }

    return(
      <ScrollView style={styles.container}>

        <View style={styles.top}>
        <Tile
          imageSrc={require('../wo_tile.jpg')}
          title="Workout Completed"
          titleStyle={styles.welcome}
          featured
          />
        </View>

        <View style={styles.stats}>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Streak</Text>
            <Icon name="md-flame" size={75} color="#ff4858"/>
            <Text style={{fontSize: 15}}>{streak} days </Text>
            </View>
          </Card>
          <Card>
            <View style={styles.statscont}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Points</Text>
            <Icon name="md-ribbon" size={75} color="gold"/>
            <Text style={{fontSize: 15}}>{points}</Text>
            </View>
          </Card>
        </View>


        <View style={{alignItems:'center', paddingTop: 25}}>
            <TouchableOpacity onPress={this.home} style={{backgroundColor:'#ff4858', borderRadius: 15,width: 180, height: 30}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'white', textAlign:'center'}}>Back to Workout Screen</Text>
            </TouchableOpacity>
        </View>


      </ScrollView>
    );

  }
}


export default CompletedWorkout;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111d53',
  },
  image:{
      width: screenwidth*.5,
      height: screenwidth*.5,
      borderRadius:100,
      borderWidth:4
  },
  top:{
    height: screenheight*.45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111d53',
    flex: 1,
    //padding: 15,
    paddingBottom:25
  },
  stats:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statscont:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome:{
    fontSize: 40,
    paddingTop:20,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',

  }
  });
