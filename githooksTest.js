"use strict";

const PORT = 4000//process.env.PORT || 8080;
const SECRET = "";
const REPOSITORY_NAME = "test";
//port changed to 3128
const http = require("http");
const createHandler = require("github-webhook-handler");
const handler = createHandler({
  path: "/",
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
})

handler.on("push", function(event){
  const payload = event.payload;
  const repoName = payload.repository.name;
  const branch = payload.ref.split("/").pop();

  console.log("received push");

  if(repoName === REPOSITORY_NAME && branch === "master"){

  }
})
