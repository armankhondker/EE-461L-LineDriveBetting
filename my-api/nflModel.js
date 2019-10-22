// nflModel.js
var mongoose = require('mongoose');
// Setup schema
var nflGameSchema = mongoose.Schema({
  time: String,
  num1: String,
  num2: String,
  team1: String,
  team2: String,
  sys_time: Array,
  opening_ps_1: Array,
  opening_ml_1: Array,
  opening_ps_2: Array,
  opening_ml_2: Array,
  bovada_ps_1: Array,
  bovada_ml_1: Array,
  bovada_ps_2: Array,
  bovada_ml_2: Array,
  betonline_ps_1: Array,
  betonline_ml_1: Array,
  betonline_ps_2: Array,
  betonline_ml_2: Array,
  intertops_ps_1: Array,
  intertops_ml_1: Array,
  intertops_ps_2: Array,
  intertops_ml_2: Array,
  sportsbetting_ps_1: Array,
  sportsbetting_ml_1: Array,
  sportsbetting_ps_2: Array,
  sportsbetting_ml_2: Array,
  betnow_ps_1: Array,
  betnow_ml_1: Array,
  betnow_ps_2: Array,
  betnow_ml_2: Array,
  create_date: {
      type: Date,
      default: Date.now
  }
}, {collection: 'nfl_data'});
// Export Contact model
var nflGame = module.exports = mongoose.model('nflGame', nflGameSchema);
module.exports.get = function (callback, limit) {
    nflGame.find(callback).limit(limit);
}
