var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Platillo = require('../models/comida.model.js');

/* GET comidas listing. */
router.get('/', function(req, res, next) {
  Platillo.find({}, function(err, datos) {
    res.status(200).json(datos);
  });

});


router.get('/:comidaId', function(req, res, next) {
  Platillo.findOne({
    'id': req.params.comidaId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.comidaId);
});

router.post('/', function(req, res, next) {
  var comida = Platillo({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  });



  comida.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});

router.delete('/:comidaId', function(req, res, next) {
  Platillo.findOneAndDelete({
    id: req.params.comidaId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});


module.exports = router;
