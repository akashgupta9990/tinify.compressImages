var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    tinify = require("tinify"),
	fs = require("fs");

http.globalAgent.maxSockets = 100000;

var app = express();
tinify.key = "";


app.post('/compress', function(req, res) {
    var dir = './images'
	fs.readdir(dir, function(err, filenames) {
		filenames.forEach(function(filename) {
			var f = filename;
			var source = tinify.fromFile(dir + '/' + filename);
			source.toFile(f);
		})
	});
});

app.listen(1337);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '.')));

var server = http.createServer(app).listen(app.get('port'), 1500);
server.timeout = 0;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';