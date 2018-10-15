var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET another page. */
router.get('/another', function(req, res, next) {
  const testFolder = path.join(__dirname + '/../public/banners/');
  const fs = require('fs');

  let images = [];
  let zips = [];
  let folders = [];

  let pattern = /[0-9][0-9][0-9]x[0-9]?[0-9]\d(?!x)/;

  let bannerArray = [];

  
  fs.readdirSync(testFolder).forEach(file => {
    let fileExt = path.extname(file);


    let banner = {
      zip: '',
      image: '',
      path: '',
      size: '',
      url: getHTML()
    }

    

    if(file == '.DS_Store') {
      return;
    }


    if(fileExt == ``){
      let bannerSizeMatch = file.match(pattern);
      let currentSize = bannerSizeMatch[0].split('x');
  

      
      let filePath = '/banners/' + file + `/index.html`;

      banner.path = filePath;
      banner.image = '/banners/' + file + `.jpg`;
      banner.zip = '/banners/' + file + `.zip`;
      banner.size = currentSize;

      bannerArray.push(banner);
      
    };

    

    
  });
  function getHTML() {
    let finalURL = '';

    bannerArray.forEach(banner => {
      
      fs.readFile('public/' + banner.path, (err, data) => {
        
        let currentHTML = (data.toString('utf8'));
        let splitHTML = currentHTML.split(/\r?\n/);

        let mappedHTML = splitHTML.map(x => {
          if(x.match("var clickTag")) {
            let urlArray = x.split(`"`);
            var finalURL = (urlArray[1]);
            banner.url = finalURL;

            return finalURL;
            
          }
          else {
            return "NA";
          }    
      });

    })
       
  })};

  
   


  

  res.render('index', { bannerArray, title: 'Express' });
});

module.exports = router;
