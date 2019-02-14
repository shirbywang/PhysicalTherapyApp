const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('combined')); 

//DB connection
const url = 'mongodb://localhost:27017';
const dbName = 'app'; 
const client = new MongoClient(url);

app.post('/login', (req, res) => {
  //Check with login system or social media login
  res.send("login endpoint hit"); 
});

app.get('/workout', (req, res) => { 
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    const collection = db.collection('exercises'); 

   collection.find({
      "name": "LATERAL LEG RAISES"
    }).limit(2).toArray(function(err, docs){
        if(docs){
          res.send(docs); 
        }
    }); 
   
    client.close();
    });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
