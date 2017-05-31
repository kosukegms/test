var http = require("http");
var createHandler = require("github-webhook-handler");

var PORT = 4001;
var SECRET = "test";
var REPOSITORY_NAME = "test";



var handler = createHandler({
  path: "/github/SelfyRewards_Server/",
  secret: SECRET
});

http.createServer(function(req, res){
  handler(req, res, function(err){
    res.statusCode = 404;
    res.end("no such location");
  });
}).listen(PORT);

handler.on("error", function(err){
  console.error("Error:", err.message);

});

handler.on("issues", function(event) {
  console.log("issed");
});

handler.on("push", function(event){
  var payload = event.payload;
  var repoName = payload.repository.name;
  var branch = payload.ref.split("/").pop();

  console.log("received push");

  if(repoName === REPOSITORY_NAME && branch === "master"){
    console.log(payload.head_commit.modified);
    console.log(branch);


  }
});
