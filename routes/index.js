var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'J&A 2016' });
});


//GET Partials

router.get('/partials/:name', function(req, res, next){
	console.log(req.params.name);
	res.render('partials/'+req.params.name+'');
});
module.exports = router;
