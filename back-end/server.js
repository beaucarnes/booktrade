var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = mongoose.model('Book', {
    book: String
})

app.use(bodyParser.json())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
})

app.get('/api/book', GetBooks);

app.post('/api/book', function(req,res){
    console.log(req.body);
    
    var book = new Book(req.body);
    
    book.save();
    
    res.status(200);
})

function GetBooks(req, res)
{
    Book.find({}).exec(function(err, result){
        res.send(result);
    })
}

mongoose.connect("mongodb://" + process.env.IP + ":27017/test", function(err, db){
    if (!err) {
        console.log("We are connected to Mongo");
    }
})


var server = app.listen(8081, function() {
    console.log('listening on port', server.address().port)
})