var Mongoclient=require('mongodb').MongoClient;

exports.createConnection=function(){
  console.log("inside createconnection");
  Mongoclient.connect("mongodb://db5697:ven15@vec304.mlab.com:11258/projector5").then(function(client){
    console.log("connected to database");

    exports.database=client.db("projector5");
  })
}
