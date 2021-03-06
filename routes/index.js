const express         = require('express');
// const path = require ('path');
// const mustacheExpress= require ('mustache-express');
// const app= express();
// const router=require('./routes/users.js')
const router= express.Router();
const app= express();
let data=[];

const getListing = function(req, res, next) {
  let MongoClient=require('mongodb').MongoClient;
  let assert= require('assert');

  let url='mongodb://localhost:27017/robots';

  MongoClient.connect (url, function(err, db){
        assert.equal(null, err);


  // app.get

        getData(db, function() {
          db.close();
          next();

});
});

let getData = function(db, callback) {
  let users = db.collection('users');

  users.find({}).toArray().then(function(users){
    data = users;
    callback();
  });
};




};
router.get('/', getListing, function(req,res){
  res.render('index', {users:data});

});
router.get('/employed', function(req,res){
let employed= [];
data.forEach(function(user){
  if(user.job!= null) {
    employed.push(user);
}
});
res.render('employed', {users: employed})
});
router.get('/looking', getListing, function(req, res){
  let looking= [];
  data.forEach(function(user) {
    if(user.job == null) {
      looking.push(user);
  }
  });
  res.render('looking', {users:looking})
});

let tempUser;

router.get('/listing/:id', getListing, function(req,res){
  console.log("listing");
  let id= req.params.id;
  if (id == "style.css") {
    res.render('listing', {users: tempUser });
    tempUser = null;
  } else {
    let userToRender;
    data.forEach(function(user) {
      if (user.id == id){
          userToRender = user;
          tempUser = user;
        }
    });
    res.render('listing', {users: userToRender });
  }
});

router.get('/employed/:id', getListing, function(req,res){
  console.log("employed");
  let id= req.params.id;
  if (id == "style.css") {
    res.render('employed', {users: tempUser });
    tempUser = null;
  } else {
    let userToRender;
    data.forEach(function(user) {
      if (user.id == id){
          userToRender = user;
          tempUser = user;
        }
    });
    res.render('employed', {users: userToRender });
  }
});

router.get('/looking/:id', getListing, function(req,res){
  console.log("looking");
  let id= req.params.id;
  if (id == "style.css") {
    res.render('looking', {users: tempUser });
    tempUser = null;
  } else {
    let userToRender;
    data.forEach(function(user) {
      if (user.id == id){
          userToRender = user;
          tempUser = user;
        }
    });
    res.render('looking', {users: userToRender });
  }
});

module.exports=router;















// app.listen(8081, function(){
//   console.log('This App s running on localhost 8081');
//
// });




// const mustacheExpress = require('mustache-express');
// const path= require('path');
// const data            = require('./data.js');
// const app             = express();
//
// app.engine('mustache', mustacheExpress());
// app.set('views', './views');
// app.set('view engine', 'mustache');
//
// app.use(express.static('public'))
//
//
// app.get('/', function(req, res){
// res.render('index', {userData:data.users});
//
//
