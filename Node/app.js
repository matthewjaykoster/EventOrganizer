

var express = require('express');
var routes = require('routes')
var http = require('http');

var app = express();

app.configure(function(){
              app.set('port', process.env.PORT || 3000);

             
//              app.use(express.static(__dirname + '/public'));


});


// This is a generic change to test GIT functionality with Aptana.


http.createServer(app).listen(app.get('port'), function(){
                              console.log("Express server listening on port " + app.get('port'));
                              });
