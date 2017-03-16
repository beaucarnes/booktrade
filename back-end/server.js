var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/api/book', function(req,res){
    console.log(req.body);
    res.status(200);
})


var server = app.listen(8081, function() {
    console.log('listening on port', server.address().port)
})