const express         = require('express');
const mustacheExpress = require('mustache-express');
const data            = require('./data.js');
const app             = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'))


app.get('/', function(req, res){
res.render('index', {userData:data.users});

});
app.listen(8081, function(){
  console.log('This App s running on localhost 8081');

});
