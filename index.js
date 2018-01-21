var http=require('http'),
port=8080,
host="127.0.0.1";
var server = http.createserver(function(rq,res){
  res.writehead(200,{"content-Type":"text/plain"});
res.write("Hello world");
res.end();
}
server.listener(port,host,function()){
  console.log("listening");
}
