import React, { Component } from 'react';
import './App.css';
import MaterialTable from 'material-table'

class APIService extends Component{
  constructor(props){
    super(props); 
    this.state = {
      connected: false,
      response: null,
      collections: null
    }
  }
  start(){
    //try connecting
    //this.response = await fetch("http://localhost:8000/");
    this.setState({connected: true}, function(){
      console.log("database connected successfully!"); 
    }); 
  }

  async getWorkout(){
      const response = await fetch(this.props.dbURL + `workout?injury=IT BAND SYNDROME&phase=1`);
      const json = await response.json();
      this.setState({ data: json }, function(){
      console.log(this.state.data); 
    }); 
    return json; 
    //console.log('get workout');
  }

  //READ
  //collections in db

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
      console.log(json);
      return json;
    }
  }

  //data within each collection

  //CREATE
  //new injury
  //new exercise - update phases

  //UPDATE
  //DELETE

  render(){
    if(this.state.connected === false){
      return(<div>Connection: Not connected</div>);
    }
    return(<div><div>Connected</div><br/><div>{this.response}</div></div>); 
  }
}

class Exercise extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return <div></div>;
    
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.dbConnection = React.createRef(); 
    this.state = { 
      data: [],
      collections: [], 
      exerciseData: false 
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
        console.log(data); 
        this.setState({exerciseData: true}); 
      }
  }

  async getWorkout() {
    let json = await this.dbConnection.current.getWorkout();
    this.setState({data: json}, function(){
      console.log('data recieved');
    })
  }

  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <span>Database: MongoDB</span><br/> 
        <APIService dbURL="http://localhost:8000/" ref={this.dbConnection}></APIService>
        <ul>{
          this.state.collections.length > 0 ? this.state.collections.map(element=>
          <li key={element}><button onClick={() => this.showData(element)}>{element}</button></li>) : "unable to map"
        }</ul>
        <div style={{ maxWidth: '80%' }}>
        {
          this.state.exerciseData ? <div>show data here hehe</div> : ""
        }
        {/*<MaterialTable
          columns={[
            { title: 'name', field: 'name' }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Data"
        />*/}
      </div>
      {/*<button onClick={() => this.getWorkout()}>Connect to database</button>*/}
        
      </div>
    );
  }
}

export default App;
