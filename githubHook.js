
//$ curl localhost:4001 -X POST -d '{"test": "app", "exp": "bcd"}'
var express = require("express"),
  parser = require("body-parser");
var app = express();
var PORT = 4001;

//
//  Not suffice for github webhook quite yet.
//  github will assume deliver is failed even if this recieved the file.




////for application/x-www-form-urlencoded post
// app.use(parser.urlencoded({
//   extended: true
// }));

////for application/json post
app.use(parser.json());

app.post("/github/SelfyRewards_Server/", function(req, res){
  console.log(req.body);
  ;
});

app.listen(PORT);
