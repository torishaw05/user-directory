const express         = require('express');
const path = require ('path');
const mustacheExpress= require ('mustache-express');
const app= express();
const router=require('./routes/users.js')
const router= express.Router();

let data=[];

const getListings = function(req, res, next) {
  let MongoClient=require('mongodb').MongoClient;
  let assert= require('assert');

  let url='mongodb://localhost:27017/robots';

  MongoClient.connect (url, function(err, db){
        assert.equal(null, err);


  app.get

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
router.get('/', getListings, function(req,res){
  res.render('index', {users:data});

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
