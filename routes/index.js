var express = require('express');
var router = express.Router();
var serialServices = require('../services/serial-service');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/start', function(req, res, next) {
  
  models.user.findAll({
    where: {
      name: req.params.name,
    }
  }).then(user=>{
    if(!user){
      models.user.create({ name: req.params.name});
      models.user.findAll({
        where: {
          name: req.params.name,
        }
      }).then(newUser => {
        models.pos.create({ pos: req.params.pos, seq: newUser.seq});  
      })
    }
    else{
      models.pos.create({ pos: req.params.pos, seq: user.seq});
    } 
  })
  serialServices.open(req.params.pos);
  res.json({status: true})
});

router.post('/end', function(req, res, next) {
  serialServices.close();
  res.json({status: true})
});

module.exports = router;
