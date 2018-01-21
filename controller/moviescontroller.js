var movies = require('./moviedata');
var dbservice=('../services/dbservices');
exports.getAllmovies=function(req,res){
  var db=dbservice.database;
  var moviesCollection=db.collection("movies");
  moviesCollection.find().toArray().then(function(result){
  var outputJSON={
    "jsSuccess":true,
    "data":result
  }


  return res.json(outputJSON);
});
};
exports.addNewMovie=function(req,res,next){
  console.log(dbservice.database);
  var db=dbservice.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "jsSuccess":true
    });
  });
}
