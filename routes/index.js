var express = require('express');
var router = express.Router();

var spotify = require('spotify');



/* This is my route for React */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/* This is my API that React talks to.  */
router.get('/api', function(req, res, next) {

 spotify.search({ type: 'track', query: 'daft punk' }, function(err, data) {
     if ( err ) {
         console.log('Error occurred: ' + err);
         return;
     }

     // Do something with 'data'


       res.json(data);
 });

});

module.exports = router;
