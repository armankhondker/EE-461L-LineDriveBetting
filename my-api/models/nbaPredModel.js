// nflModel.js
var mongoose = require('mongoose');
// Setup schema
var nbaPredSchema = mongoose.Schema({
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
  carmElo1_pre: String,
  carmElo2_pre: String,
  carmElo_prob1: String,
  carmElo_prob2: String,
  carmElo1_post: String,
  carmElo2_post: String,
  raptor1_pre: String,
  raptor2_pre: String,
  raptor_prob1: String,
  raptor_prob2: String,
  score1: String,
  score2: String,
  create_date: {
      type: Date,
      default: Date.now
  }
}, {collection: 'nba_predictions'});
// Export Contact model
var nbaPred = module.exports = mongoose.model('nbaPred', nbaPredSchema);
module.exports.get = function (callback, limit) {
    nbaPred.find(callback).limit(limit);
}
