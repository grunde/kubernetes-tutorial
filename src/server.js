const http = require('http');
let requests = 0;
const podname = process.env.HOSTNAME;
let startTime;
let host;
const handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Hello Kubernetes bootcamp v2! | Running on: ");
  response.write(host);
  response.end(" | v=2\n");
  console.log("Running On:", host, "| Total Requests:", ++requests, "| App Uptime:", (new Date() - startTime) / 1000, "seconds", "| Log Time:", new Date());
};
const www = http.createServer(handleRequest);
www.listen(8080,function () {
  startTime = new Date();
  host = process.env.HOSTNAME;
  console.log ("Kubernetes Bootcamp App Started At:",startTime, "| Running On: " ,host, "\n" );
});