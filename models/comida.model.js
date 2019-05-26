var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlatilloSchema =  Schema({
  id:Number,
  name:String,
  price:Number,
  image:String
});

module.exports = mongoose.model('Platillo', PlatilloSchema);
