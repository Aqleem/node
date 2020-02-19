let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
 
  fs.readFile('text.txt', function(data) {
    res.write(data);
    return res.end();
  });
}).listen(4000);