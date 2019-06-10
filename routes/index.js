var express = require('express');
var router = express.Router();
var serialServices = require('../services/serial-service');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/start', function(req, res, next) {
console.log(req.body.name)  
  models.user.findAll({
    where: {
      name: req.body.name,
    }
  }).then(user=>{
    if(user.length==0){
      models.user.create({ name: req.body.name});
	    
//      models.db.sequelize.query('INSERT INTO user (seq, name) VALUES (NEXTVAL(s), :name)',{replacements:{name:req.body.name}, type: models.db.sequelize.QueryTypes.INSERT})
	    //
      models.pos.create({ position: req.body.pos, name: req.body.name}).then(()=>{
         //serialServices.open(req.body.pos, req.body.name);
	 position = req.body.pos;
	 name = req.body.name;
	 serialOn = true;
      });  
      
    }
    else{
	    console.log('step2'+user.name)

      models.center.destroy({
	  where: {
	     name: req.body.name,

             position: req.body.pos
	  }
      }).then(()=>{
      models.pos.destroy({
	  where: {
	     name: req.body.name,
	     position: req.body.pos
	  }
      })}).then(()=>{

      models.pos.create({ position: req.body.pos, name: user[0].name}).then(()=>{
//         serialServices.open(req.body.pos, req.body.name);
position=req.body.pos;
name=user[0].name;
console.log(name);
	 serialOn = true;
      });
      });
    } 
  })
  res.json({status: true})
});

router.post('/end', function(req, res, next) {
//  serialServices.close();
serialOn = false;
  res.json({status: true})
});

module.exports = router;
