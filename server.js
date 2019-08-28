let express = require('express');
let app = express();
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

var db = [];

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

var filePath = __dirname + '/views/';
app.use(express.static('img'));
app.use(express.static('css'));

app.get('/',function(req,res){
    let fileName = filePath + 'index.html';
    res.sendFile(fileName);
});

app.get('/addNewtask',function(req,res){
    let fileName = filePath + 'addNewtask.html';
    res.sendFile(fileName);
});

app.post('/addTaskInfo',function(req,res){
    db.push(req.body);
    res.render('listAlltask',{tasks:db});
});

app.get('/listAlltask',function(req,res){
    res.render('listAlltask',{tasks:db});
});


app.listen(8080);