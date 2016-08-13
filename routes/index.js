var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Interface Manager'});
});

router.post('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400);

  var username = req.body.username;
  var password = req.body.password;
  var url = req.body.url;
  var version = req.body.version ? req.body.version : '0.0.0';
  var script = req.body.script;

  // Validate required mirth-cli params
  if (!username) return res.sendStatus(400);
  if (!password) return res.sendStatus(400);
  if (!url) return res.sendStatus(400);
  if (!script) return res.sendStatus(400);

  // TODO: Write script to temporary text file
  // TODO: Start new child process to run mirth-cli
  // TODO: Return mirth-cli output back to client
});

module.exports = router;
