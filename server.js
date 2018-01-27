const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mysql = require('mysql'),
    path = require('path');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));

// ROUTES ///////////////////////////////////////////////////

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,'index.html'));
});



// SERVER CONNECTION ///////////////////////////////////////////////////
const port = 3000;
app.listen(port);

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'fooddiary_db'
})

connection.connect(function(err){
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId)
})

