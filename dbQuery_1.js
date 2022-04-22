var MongoClient = require('mongodb').MongoClient;

var client = new MongoClient('mongodb://localhost:27017');


async function dbQuery (username){

    await client.connect();
    console.log("Connected to db server");
    var db=client.db('myproject');            //Connecting to our database
    var collection = db.collection('userDetails');   //Using our collection in our database
    var userData = await collection.findOne({"name" : username});  //Function for querying data from our collection
    return userData;  //returning the queried object
}

module.exports=dbQuery;