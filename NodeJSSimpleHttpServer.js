var http = require("http");

http.createServer( (request, response) => {
    
    // We start building a response
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'contentType': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end("Hello World\n");
    
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081, using arrow function");