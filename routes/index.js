var express = require('express');
var router = express.Router();
var fs = require('fs')
var FormData = require('form-data')
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express && Art' });
});

router.post('/upload', function(req, res, next) {
  var file = req.files.file
  var form = new FormData();
  form.append('smfile', fs.createReadStream(file.path));
  axios.post('https://sm.ms/api/upload', form, {
    headers: form.getHeaders(),
  }).then(data => res.send(data.data))
});

module.exports = router;
