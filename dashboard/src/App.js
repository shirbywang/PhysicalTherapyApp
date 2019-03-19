import React, { Component } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import 'react-dropdown/style.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import logo from './logo.png';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand } from 'reactstrap';
const DBURL = "http://localhost:8000/"; 

class APIService extends Component{
  constructor(props){
    super(props); 
    this.state = {
      connected: false,
      response: null,
      collections: null
    }
  }

  async componentDidMount(){
    let response = await fetch(DBURL); 
    if(response){
      this.setState({connected: true}); 
    }
  }

  async getWorkout(){
      const response = await fetch(this.props.dbURL + `workout?injury=IT BAND SYNDROME&phase=1`);
      const json = await response.json();
      this.setState({ data: json }, function(){
    }); 
    return json; 
  }

  async getAllCollections(){
    const response = await fetch(this.props.dbURL + "viewCollections"); 
    const json = await response.json(); 
    this.setState({collections: json}); 
    return json;
  }

  async getCollection(collection){
    console.log("get collection called"); 
    if(collection === "exercises"){
      const response = await fetch(this.props.dbURL + "exercises");
      const json = await response.json(); 
      return json;
    }
    if(collection === "injuries"){
      const response = await fetch(this.props.dbURL + "injury");
      const json = await response.json(); 
      return json;
    }

  }

  async createExercise(data){
    let url = this.props.dbURL + "exercises";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data[0])
    }); 
    return response; 
  }

  render(){
    if(this.props.show === 'false'){
      return <div></div>
    }
    if(this.state.connected === false){
      return(<div>Connection: Not connected</div>);
    }
    return(<div><div>Connected</div><br/><div>{this.response}</div></div>); 
  }
}

class Form extends Component{
  constructor(props){
    super(props);
    //this.dbConnection = React.createRef(); 
    this.exerciseInputOptions = [
      "Name", "Sets", "Reps", "Reminders", "Media", "Difficulty", "BodyPart", "Genre"
    ];
    this.state ={
        name: "",
        sets: "",
        reps: "",
        reminders: "",
        media: "",
        difficulty: "",
        bodyPart: "",
        genre: "",
        submitted: false,
        submitData: "",
        response: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, value){
    if(value === 'name'){
      this.setState({name: event.target.value}); 
    }
    if(value === 'sets'){
      this.setState({sets: event.target.value});
    }  
    if(value === 'reps'){
      this.setState({reps: event.target.value});
    } 
    if(value === 'reminders'){
      this.setState({reminders: event.target.value});
    } 
    if(value === 'media'){
      this.setState({media: event.target.value});
    } 
    if(value === 'difficulty'){
      this.setState({difficulty: event.target.value});
    } 
    if(value === 'bodyPart'){
      this.setState({bodyPart: event.target.value});
    } 
    if(value === 'genre'){
      this.setState({genre: event.target.value});
    } 

  }

  handleSubmit(event){
      this.setState({submitted: true}); 
      event.preventDefault();
  }

  async send(){
    let exercise = [{
      "exercise": [
        {
          "name": this.state.name,
          "sets": this.state.sets,
          "reps": this.state.reps,
          "reminders": this.state.reminders,
          "media": this.state.media,
          "difficulty": this.state.difficulty,
          "bodyPart": this.state.bodyPart,
          "genre": this.state.genre
        }
      ]
    }]; 
    this.setState({submitData: exercise}); 
    let _response = await this.dbConnection.current.createExercise(exercise);
    this.setState({response: _response}); 
  }

  submission(){
      if(this.state.submitted){
          //this.send();
        //this.dbConnection.current.createExercise(exercise);
        //this.setState({response: _response}); 
        return <div>
          name: {this.state.name},
          sets: {this.state.sets},
          reps: {this.state.reps},
          reminders: {this.state.reminders},
          media: {this.state.media},
          difficulty: {this.state.difficulty},
          bodyPart: {this.state.bodyPart},
          genre: {this.state.genre}
        </div>
      }
  }

  render(){
    return(
      <div>
        <h4>Exercise Form - Insert New Exercise</h4>
      <form onSubmit={this.handleSubmit}>
      <APIService dbURL={DBURL} ref={this.dbConnection} show="false"></APIService>
          {/*this.exerciseInputOptions.map(col=>
              <label>{col}
                <input type="text" value={this.state.col} onChange={this.handleChange}/> 
          </label>)*/}
        <label>Name: 
          <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')}></input>
        </label>
        <label>Sets: 
          <input type="text" value={this.state.sets} onChange={(e) => this.handleChange(e, 'sets')}></input>
        </label>
        <label>Reps: 
          <input type="text" value={this.state.reps} onChange={(e) => this.handleChange(e, 'reps')}></input>
        </label>
        <label>Reminders: 
          <input type="text" value={this.state.reminders} onChange={(e) => this.handleChange(e, 'reminders')}></input>
        </label>
        <label>Media: 
          <input type="file" value={this.state.media} onChange={(e) => this.handleChange(e, 'media')}></input>
        </label>
        <label>Difficulty: 
          <input type="text" value={this.state.difficulty} onChange={(e) => this.handleChange(e, 'difficulty')}></input>
        </label>
        <label>Body Part: 
          <input type="text" value={this.state.bodyPart} onChange={(e) => this.handleChange(e, 'bodyPart')}></input>
        </label>
        <label>Genre: 
          <input type="text" value={this.state.genre} onChange={(e) => this.handleChange(e, 'genre')}></input>
        </label>
        
       <Button variant="primary" type="submit">
        Submit
      </Button>
      </form>
      <div>
        {this.submission()}
      </div>
      </div>
    )
  }

}

class InjuryForm extends Component{
  constructor(props){
    super(props);
    //this.dbConnection = React.createRef(); 
    this.injuryInputOptions = [
      "Name", "Description", "Media", "RecoveryTime", "ExerciseList", "Phase Duration"
    ];
    this.state ={
        name: "",
        description: "",
        media: "",
        recoveryTime: "", 
        exerciseList: "",
        phaseDuration: "",
        submitted: false,
        submitData: "",
        response: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, value){
    if(value === 'name'){
      this.setState({name: event.target.value}); 
    }
    if(value === 'description'){
      this.setState({description: event.target.value});
    }  
    if(value === 'media'){
      this.setState({media: event.target.value});
    } 
    if(value === 'recoveryTime'){
      this.setState({recoveryTime: event.target.value});
    } 
    if(value === 'exerciseList'){
      this.setState({exerciseList: event.target.value});
    } 
    if(value === 'phaseDuration'){
      this.setState({phaseDuration: event.target.value});
    } 

  }

  handleSubmit(event){
      this.setState({submitted: true}); 
      event.preventDefault();
  }

  submission(){
    if(this.state.submitted){
        //this.send();
      //this.dbConnection.current.createExercise(exercise);
      //this.setState({response: _response}); 
      return <div>
        name: {this.state.name},
        description: {this.state.description},
        media: {this.state.media},
        recoveryTime: {this.state.recoveryTime},
        exerciseList: {this.state.exerciseList},
        phaseDuration: {this.state.phaseDuration}
      </div>
    }
}

  render(){
    return(
      <div>
        <h4>Injury Form - Insert New Injury</h4>
      <form onSubmit={this.handleSubmit}>
      <APIService dbURL={DBURL} ref={this.dbConnection} show="false"></APIService>
          {/*this.exerciseInputOptions.map(col=>
              <label>{col}
                <input type="text" value={this.state.col} onChange={this.handleChange}/> 
          </label>)*/}
        <label>Name: 
          <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')}></input>
        </label>
        <label>Description: 
          <input type="text" value={this.state.description} onChange={(e) => this.handleChange(e, 'description')}></input>
        </label>
        <label>Media: 
          <input type="file" value={this.state.media} onChange={(e) => this.handleChange(e, 'media')}></input>
        </label>
        <label>Recovery Time: 
          <input type="text" value={this.state.recoveryTime} onChange={(e) => this.handleChange(e, 'recoveryTime')}></input>
        </label>
        <label>Exercise List: 
          <input type="text" value={this.state.exerciseList} onChange={(e) => this.handleChange(e, 'exerciseList')}></input>
        </label>
        <label>Phase Duration: 
          <input type="text" value={this.state.phaseDuration} onChange={(e) => this.handleChange(e, 'phaseDuration')}></input>
        </label>
        
       <Button variant="primary" type="submit">
        Submit
      </Button>
      </form>
      <div>
        {this.submission()}
      </div>
      </div>
    )
  }
}

class InjuryData extends Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.type === "showData"){
      let results = JSON.parse(this.props.data); 
      //console.log("data table result: " + results); 
      let col = []
      for(let i = 0; i < results.length; i++){
        //find all columns from first object
          if(i===0){
            for(var k in results[i]){
              //console.log(k);
              col.push({title: k, field: k});
            }
          }
      }
      //console.log(col);
      return <MaterialTable
        columns = {col}
        data = {results}
        title= {this.props.dataType}
      />;
    }
    return <div>hehe</div>
  }
}

//Display the data recieved in a Material Table
class ExerciseData extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: ""
    }
  }

  setData(data){
    this.setState({data: data}); 
  }

  //render the results
  render(){
    if(this.props.type === "showData"){
    let results = JSON.parse(this.props.data); 
    //console.log("data table result: " + results); 
    let col = []
    for(let i = 0; i < results.length; i++){
      //find all columns from first object
        if(i===0){
          for(var k in results[i]){
            //console.log(k);
            col.push({title: k, field: k});
          }
        }
    }
    return <MaterialTable
      columns = {col}
      data = {results}
      title= {this.props.dataType}
    />;
  }
  if(this.props.type === "createData"){
    return <Form></Form>
  }
    return <div>empty hehe</div> 
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.dbConnection = React.createRef(); 
    this.showData = this.showData.bind(this); 
    this.state = { 
      data: [],
      collections: [], 
      exerciseData: "",
      injuryData: "", 
      display: ""
    };
  
  }

  async componentDidMount(){
    //Find collections in database upon starting app
    let json = await this.dbConnection.current.getAllCollections();
    if(json){
      let array = json["response"]; 
      array.map((element)=>{
          let collection = element["name"]; 
          this.setState({collections: this.state.collections.concat([collection])}); 
      }); 
    }
  }
  connectToDB = () => {
    this.dbConnection.current.start(); 
  }

  async showData(collection){
      if(collection === "exercises"){
        let data = await this.dbConnection.current.getCollection("exercises"); 
        this.setState({exerciseData: JSON.stringify(data)}); 
        this.setState({display: "exercise-view"}); 
      }
      if(collection === "injuries"){
        let data = await this.dbConnection.current.getCollection("injuries"); 
        this.setState({injuryData: JSON.stringify(data)}); 
        this.setState({display: "injuries-view"}); 
      }
  }

  async showForm(collection){
    if(collection === "exercises"){
      this.setState({display: "exercise-input"}); 
    }
    if(collection === 'injuries'){
      this.setState({display: "injuries-input"}); 
    }
  }

  async getWorkout() {
    let json = await this.dbConnection.current.getWorkout();
    this.setState({data: json}, function(){
    })
  }

  renderViewData(){
    if(this.state.display === "exercise-view"){
      return(
        <ExerciseData data={this.state.exerciseData} type="showData" dataType="Exercises"></ExerciseData>
      );
    }
    if(this.state.display === "injuries-view"){
      return(
        <InjuryData data={this.state.injuryData} type="showData" dataType="Injuries"></InjuryData>
      );
    }
  }

  renderInputForm(){
    if(this.state.display === "exercise-input"){
      return(
        <Form></Form>
      )
    }
    if(this.state.display === "injuries-input"){
      return(
        <InjuryForm></InjuryForm>
      )
    }
  }

  render() {
    //if(this.state.loggedIn){
      return(
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">VidPT Admin Dashboard</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </Navbar>
          <span>Database: MongoDB</span><br/> 
          <APIService dbURL={DBURL} ref={this.dbConnection}></APIService>
            {
              this.state.collections.length > 0 ? this.state.collections.map(element=>{
                return(
                  <div className="button-toolbar">
                    <h5 className="section-title">{element}</h5>
                    <ButtonToolbar>
                      <Button variant="outline-primary" onClick={()=> {this.showData(element)}}>View</Button>
                      <Button variant="outline-primary" onClick={()=> this.showForm(element)}>Create</Button>
                      {/*<Button variant="outline-primary">Edit</Button>
                      <Button variant="outline-primary">Delete</Button>*/}
                    </ButtonToolbar>
                  </div>
                  
              );}) : <li>"unable to map"</li>
            }
          <div style={{ maxWidth: '90%', padding: '20px'}}>
          {this.renderViewData()}
          {this.renderInputForm()}
        </div>
        </div>
      );
  //   }
  //   return(
  //     <div className="splash-screen">
  //       <img className="logo" src={logo} alt="Logo"></img>
  //       <Button variant="primary" onClick={() => this.setState({loggedIn: true})}>Login</Button>
  //     </div>
  //   );
  // }
}
}

export default App;
