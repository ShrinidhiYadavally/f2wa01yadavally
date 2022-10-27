var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `math.imul() applied to ${x} is ${Math.imul(x)}`,
    value1: `math.log() applied to ${x} is ${Math.log(x)}` ,
    value2: `math.log10() applied to ${x} is ${Math.log10(x)}` });
  }
  else{

    for (let a in req.query) {

      console.log(a)

      res.render('computation', { value: `math.imul() applied to ${req.query[a]} is ${Math.imul(req.query[a])}`,
      value1: `math.log() applied to ${req.query[a]} is ${Math.log(req.query[a])}` ,
      value2: `math.log10() applied to ${req.query[a]} is ${Math.log10(req.query[a])}` })

    }
  }


});


module.exports = router;