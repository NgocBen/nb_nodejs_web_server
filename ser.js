server = require('http').createServer(function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write('NgocBen');
    res.end();
});
server.listen(8080);