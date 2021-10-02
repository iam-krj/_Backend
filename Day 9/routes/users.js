var express = require('express');
var router = express.Router();
// var cons
const path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/files/:name', function(req, res, next) {
  // res.send(path.join(__dirname, "public/images/img1.jpg");
  // res.send('respond with sk resource');
  res.sendFile(path.join(__dirname,'../', 'public/images/',req.params.name));
});

module.exports = router;
