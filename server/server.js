var express         = require('express');
var app             = express();
var path            = require('path');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var port            = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use('/client', express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../client/views', 'index.html'));
});

app.listen(port, function(){
    console.log("listening on port: " + port);
})
