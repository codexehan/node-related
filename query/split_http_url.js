var http = require('http');
var url = require('url');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;//http://localhost:8080/?year=2017&month=July
    var txt = q.year + " " + q.month;//2017 July
    res.end(txt);
}).listen(8080);