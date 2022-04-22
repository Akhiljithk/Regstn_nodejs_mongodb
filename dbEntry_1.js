//require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;


var client = new MongoClient('mongodb://localhost:27017');

async function dbEntry (userData){ 
    
    var sampleCollection = 'userDetails';

    await client.connect(); 
    console.log("Connected correctly to server");
    
    var db=client.db('myproject');
    var collection = db.collection(sampleCollection);

    await collection.insertMany(userData);

    console.log("User details recorded in database...");

}
module.exports=dbEntry;