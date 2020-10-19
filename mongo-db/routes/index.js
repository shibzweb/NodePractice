var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',(req,res,next)=>{
  console.log(req.body)

  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) {
    console.log("not connected");
  }
  else{``
  db.db('cross_roads').collection('user').insertOne(req.body)
  }


 res.render('login.hbs')
});

 

  

})

module.exports = router;
