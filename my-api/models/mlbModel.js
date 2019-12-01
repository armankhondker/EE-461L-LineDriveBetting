// mlbModel.js
var mongoose = require('mongoose');
// Setup schema
var mlbGameSchema = mongoose.Schema({
  time: String,
  date: String,
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
}, {collection: 'mlb_data'});
// Export Contact model
var mlbGame = module.exports = mongoose.model('mlbGame', mlbGameSchema);
module.exports.get = function (callback, limit) {
    mlbGame.find(callback).limit(limit);
}
