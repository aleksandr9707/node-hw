const express = require('express');
const path = require('path');
const studentDb = require('./data/students-db');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.get('/', function(req, res) {
    res.redirect('/students');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/students', function(req, res) {
  const students = studentDb.getAll();
  res.render('students/index', { students });
});


app.listen(3005, function() {
    console.log('listening on port 3005');
});  