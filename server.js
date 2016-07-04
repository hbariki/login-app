var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
app.use(express.static('./client'));
app.set('views','./views');

app.engine('handlebars', exphbs({defaultLayout: '../index'}));
app.set('view engine','handlebars');
app.get('/templates/*',function(req,res){
    res.render('../client/templates/login.html')
});

//Application UI route
app.get('*',function(req,res){
    res.render('index');
});

app.listen(4000,function() {
    console.log('login UI running on port 4000');
});