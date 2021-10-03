var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requirements {email, firstName, lastName, password, confirmPassword } -req.body
 * @description
 * Security, Performance and edge cases
 * level-1
 * email Validate
 * password Validate
 * password == confirm
 * Level-2
 * JS/SQL
 * Level-3
 * check if email already exists
 * password hashing to keep it safe from leaking data
 * email lowercase
 * save
 */

router.post('/register', )

module.exports = router;
