var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pushactor', function(req, res, next){

  req.pool.getConnection(function(err, connection){

    if(err){
      console.log(err);
      res.sendStatus(500);
      return;
    }

    let query = "INSERT INTO actor (first_name, last_name) VALUES (?, ?)";
    connection.query(query, [req.body.firstName, req.body.lastName], function(error, rows, fields){
      connection.release();
      if(error){
        console.log(error);
        res.sendStatus(500);
        return;
      }

      console.log("pushing " + req.body.firstName + " " + req.body.lastName);
    })

    res.send();

  })

});

router.get('/getactors', function(req, res, next){

  req.pool.getConnection(function(err, connection){
    if(err){
      console.log(err);
      res.sendStatus(500);
      return;
    }
    let query = "SELECT first_name, last_name FROM actor";
    connection.query(query, function(error, rows, fields){
      connection.release();
      if(error){
        console.log(error);
        res.sendStatus(500);
        return;
      }
      console.log(rows);
      res.json(rows);
    })
  })

});

module.exports = router;
