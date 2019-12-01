// nflPredModel.js
var mongoose = require('mongoose');
// Setup schema
var nflPredSchema = mongoose.Schema({
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
  qbelo1_pre: String,
  qbelo2_pre: String,
  qb1: String,
  qb2: String,
  qb1_value_pre: String,
  qb2_value_pre: String,
  qb1_adj: String,
  qb2_adj: String,
  qbelo_prob1: String,
  qbelo_prob2: String,
  qb1_game_value: String,
  qb2_game_value: String,
  qb1_value_post: String,
  qb2_value_post: String,
  qbelo1_post: String,
  qbelo2_post: String,
  score1: String,
  score2: String,
  create_date: {
      type: Date,
      default: Date.now
  }
}, {collection: 'nfl_predictions'});
// Export Contact model
var nflPred = module.exports = mongoose.model('nflPred', nflPredSchema);
module.exports.get = function (callback, limit) {
    nflPred.find(callback).limit(limit);
}
