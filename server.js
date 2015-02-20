var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(80, function() {
	 console.log("Node server listening on port " + 80);
});