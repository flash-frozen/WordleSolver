var http = require('http');
var data = require ('./words.json');
for (let i = 0; i < 20; i++) {
  console.log(data.words[i]);
}

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);