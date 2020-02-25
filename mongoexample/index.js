const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://daniellerimart:TEFwny9dlxxseddI@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(url, function(error, connection) {
  
    if (error) {
      throw error;
    }
 
    const database = connection.db("DIG4503-78");
    const collection = database.collection("Movies");

    let result = collection.findOne({
        "score": 79
    }, {}, (error, result) => {
        console.log(result);
    });

    connection.close();
 
});