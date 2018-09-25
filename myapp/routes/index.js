var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET another page. */
router.get('/another', function(req, res, next) {
  const testFolder = (__dirname + '/../public/banners');
  const fs = require('fs');
  
  fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
