var PORT = process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT  || 8080;
var IPADDRESS = process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
})

var server  = require('http').createServer(app).listen(PORT, IPADDRESS);

var user = [];


var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8000 });

/*
wss.on('connection', function connection(ws) {
    //console.log('\n\n\nMay tram duoc ket noi');

    var uss = '';
    ws.on('message', function incoming(message) {
        //console.log('received: %s', message);
        //ws.send(message);
        if (uss==='') {
            uss = message;
            user.push(uss);
            //ws.send('Server: ' + user.join(',') +' đang online.');
            ws.send(JSON.stringify({
                user: 'Server',
                text: user.join(', ') + ' current.'
            }));
            //wss.broadcast('Server: ' + uss +' đã vào phòng.');
            wss.broadcast(JSON.stringify({
                user: 'Server',
                text: uss + ' has join.'
            }));
        } else {
            //wss.broadcast('<div class="name">' + uss +'</div>: '+ message);
            wss.broadcast(JSON.stringify({
                user: uss,
                text: message
            }));
        }
    });
    ws.on('close', function(){
        //console.log('May tram bi ngat ket noi');
        //wss.broadcast('Server: ' + uss +' đã thoát.');
        wss.broadcast(JSON.stringify({
            user: 'Server',
            text: uss + ' has left.'
        }));
    });
    
    
});
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};


//console.log('Server running....'); */

