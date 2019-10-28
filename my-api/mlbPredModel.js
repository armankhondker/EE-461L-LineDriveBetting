// mlbPredModel.js
var mongoose = require('mongoose');
// Setup schema
var mlbPredSchema = mongoose.Schema({
  date: String,
  season: String,
  neutral: String,
  playoff: String,
  team1: String,
  team2: String,
  elo1_pre: String,
  elo2_pre: String,
  elo_prob1: String,
  elo_prob2: String,
  elo1_post: String,
  elo2_post: String,
  rating1_pre: String,
  rating2_pre: String,
  pitcher1: String,
  pitcher2: String,
  pitcher1_rgs: String,
  pitcher2_rgs: String,
  pitcher1_adj: String,
  pitcher2_adj: String,
  rating_prob1: String,
  rating_prob2: String,
  rating1_post: String,
  rating2_post: String,
  score1: String,
  score2: String,
  create_date: {
      type: Date,
      default: Date.now
  }
}, {collection: 'mlb_predictions'});
// Export Contact model
var mlbPred = module.exports = mongoose.model('mlbPred', mlbPredSchema);
module.exports.get = function (callback, limit) {
    mlbPred.find(callback).limit(limit);
}
