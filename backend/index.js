const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; 
const assert = require('assert');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('combined')); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header({'Content-Type': 'application/json',
  'Accept': 'application/json'});
  next();
});

//DB connection
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'app'; 
const client = new MongoClient(dbUrl,  {useNewUrlParser: true });
var db; 

//Initialize database , using connection pooling by using 1 db connection
client.connect(function(err) {
  if(err) throw err; 
  db = client.db(dbName);
  //Starting app after db is setup
  app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });
});

app.get('/*',function(req,res,next){
  res.header('x-Trigger' , 'CORS' );
  next(); // http://expressjs.com/guide.html#passing-route control
});

app.get('/', function(req,res){
  console.log("Connected to server!")
  res.send({response: "Connected to VidPT API!"}); 
});

app.post('/login', (req, res) => {
  //Check with login system or social media login
  res.send({response: "login endpoint hit"}); 
});

app.get('/viewCollections', (req,res)=>{
  db.listCollections().toArray(function(err,docs){
    if(err){
      console.log("db error: " + err);
      throw err;
    }
    if(docs){
      res.send({response: docs});
    }
  }); 
});

app.get("/exercises", (req,res)=>{
  const collection = db.collection('exercises'); 
  collection.find().toArray(function(err, docs){
      if(err) throw err; 
      if(docs){
        res.send(docs);
      }
  });
});

//CREATE EXERCISE FROM BODY DATA - STRICTLY FOLLOWING SCHEMA
app.post("/exercises", (req,res)=>{
  console.log("body: " + req.body.name);//find body)); 
  const collection = db.collection('exercises'); 
  var message = ""; 
  var found = false; 
  //Check for duplicate exercise
  collection.find({
    "name": req.body.name
  }).toArray(function(err,docs){
      if(err) {
        console.log("Error in adding exercise: " + err); 
        message = "error"; 
      }
      if(docs) {
        message = "ERROR: EXERCISE FOUND - DUPLICATE"; 
        found = true; 
      }
      res.write(message);
      res.end(); 
  });
  if(!found){
    //create new exercise from body data
    try{
      if(typeof(body) != undefined){
      collection.insertOne(req.body, function(err, res){
        if(err) message = "ERROR: COULD NOT ADD EXERCISES -";
        console.log("inserted doc: " + res.ok); 
        ()=>{ 
          res.write("SUCCESS - Inserted document - " + res.ok); 
          res.end(); 
        }; 

      }); 
    }
    else{
      message = "error"; 
      res.write(message);
      res.end(); 
    }
    }
    catch(e){
      console.log(e); 
      message = "ERROR: Document not inserted"; 
      res.write(message);
      res.end(); 
    }
  }
  
});

//Params: injury=string&phase=int 
app.get('/workout', (req, res) => { 
  var statusMessage = ""; 
  if(req.query.injury == undefined || Object.keys(req.query).length == 0){
    statusMessage = "ERROR: Must include injury parameter";
    res.send(statusMessage); 
  }
  if(req.query.phase == undefined){
      statusMessage = "ERROR: Must include phase parameter; must be integer";
      res.send(statusMessage); 
  }
  
  var injuryID;
  const collection = db.collection('injuries'); 
   collection.find({
      "name": req.query.injury
    }).limit(1).toArray(function(err, docs){
        if(err) throw err; 
        if(!(docs === undefined)){
          console.log(req.query.injury + ": " + docs); 
          injuryID = docs[0]._id; 
          if(typeof(docs[0][phase]) == undefined){
            statusMessage = "Invalid phase number, not found."; 
            res.send(statusMessage); 
          }
          return getPhases(injuryID); 
        }
        else{
          res.send("ERROR: Results not found for injury: " + req.query.injury); 
        }
    }); 

    //Gets exercises based on the given phase (1 > phaseNum > 3) -> needs to change to week
    var phase = req.query.phase; 
    function getPhases(injury_id){
      const phases = db.collection('phases');
      var _id = new ObjectID(injuryID); 
      phases.find({
                "injury": _id
            }).limit(1).toArray(function(err,innerdocs){
              if(innerdocs){
                  var start = async() => {
                    var result = await forEachinExercise(innerdocs[0].exerciseList,phase,getExercise).catch(function(err){
                      console.log(err); 
                      res.send("ERROR: " + err); 
                    });
                    console.log(result);
                    res.send(result);
                  }
                  start(); 
              }
            });
    }
    //Aggregates exercise data
    async function forEachinExercise(array, phaseNum, callback){
      var exerciseData = []; 
      const exercises = db.collection('exercises'); 
      for(let i = 0; i < array[phaseNum].length; i++){
          var data = await callback(exercises, array[phaseNum][i]); 
          exerciseData.push(data); 
      }
      console.log("Done."); 
      return exerciseData; 
    }
    //Finds data for each exercise
    async function getExercise(collection, itemID){
        var _id = new ObjectID(itemID); 
        return new Promise(function(resolve,reject){
            collection.find({
              "_id": _id
            }).limit(1).toArray(function(err,docs){
              if(err) reject(err); 
              if(docs){
                resolve(docs[0]);  
              }
            });
        });  
    }

});


