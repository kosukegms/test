"use strict";

const PORT = process.env.PORT || 8080;
const SECRET = "";
const REPOSITORY_NAME = "test";

const http = require("http");
const createHandler = require("github-webhook-handler");
const handler = createHandler({
  path: "/",
  secret: SECRET
});

http.createServer((req, res), function(){
  handler(req, res, function(err){
    res.statusCode = 404;
    res.end("no such location");
  });
}).listen(PORT);

handler.on("error", function(err){
  console.error("Error:", err.message);

});

handler.on("push", function(event){
  const payload = event.payload;
  const repoName = payload.repository.name;
  const branch = payload.ref.split("/").pop();

  if(repoName === REPOSITORY_NAME && branch === "master"){
    
  }
})
