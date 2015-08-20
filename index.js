var inflection = require( 'inflection' );
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

//home page
app.get('/',function(req,res){
  res.render('index');
});

//JSON pluralize API
app.get('/pluralize',function(req,res){
  var word = req.query.word;
  var plural = inflection.pluralize(word);
  res.send({word:word,plural:plural});
});

app.listen(process.env.PORT || 3000);
