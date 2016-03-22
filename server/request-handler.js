/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

var qs = require('querystring');
var url = require('url');


var requestHandler = function(request, response) {

  // console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var headers = defaultCorsHeaders;

  var statusCode = 404;

  // if (request.url === undefined) {
  //   response.statusCode = 404;
  //   headers['Content-Type'] = 'application/JSON';
  //   response.writeHead(response.statusCode, response.headers);
  //   response.end(JSON.stringify({results: []}));
  // }

  if (request.method === 'POST') {
    response.statusCode = 201;

    headers['Content-Type'] = 'application/JSON';
    response.writeHead(response.statusCode, response.headers);
    response.end(JSON.stringify({results: []}));
  }

  if (request.method === 'GET') {
    response.statusCode = 200;
    headers['Content-Type'] = 'application/JSON';
    response.writeHead(response.statusCode, response.headers);
    response.end(JSON.stringify({results: []}));

  }


};


var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};




exports.requestHandler = requestHandler;
exports.defaultCorsHeaders = defaultCorsHeaders;

