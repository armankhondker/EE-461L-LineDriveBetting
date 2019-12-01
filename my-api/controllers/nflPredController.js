// nflController.js
// Import game model
nflPred = require('../models/nflPredModel');
// Handle index actions
exports.index = function (req, res) {
  var dateObj = new Date();
  var days = 7;

  var lastWeek = new Date(dateObj.getTime() - (days * 24 * 60 * 60 * 1000))
  var month = ('0' + (lastWeek.getMonth() + 1)).slice(-2);
  var date = ('0' + lastWeek.getDate()).slice(-2);
  var year = lastWeek.getFullYear();
  var lastWeekDate = year + '-' + month + '-' + date;

  var nextWeek = new Date(dateObj.getTime() + (days * 24 * 60 * 60 * 1000))
  var month = ('0' + (nextWeek.getMonth() + 1)).slice(-2);
  var date = ('0' + nextWeek.getDate()).slice(-2);
  var year = nextWeek.getFullYear();
  var nextWeekDate = year + '-' + month + '-' + date;

  var query = {
      '$and': [
          {
              'date': {
                  '$gte': lastWeekDate
              }
          }, {
              'date': {
                  '$lte': nextWeekDate
              }
          }
      ]
  };
  nflPred.find(query, function (err, games) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "NFL Predictions retrieved successfully",
            data: games
        });
    });
};
// Handle create game actions
exports.new = function (req, res) {
    var pred = new nflPred();
    pred.team1 = req.body.team1 ? req.body.team1 : pred.team1;
    pred.team2 = req.body.team2 ? req.body.team2 : pred.team2;
    pred.date = req.body.date;
    pred.season = req.body.season;
    pred.neutral = req.body.neutral;
    pred.playoff = req.body.playoff;
    pred.elo1_pre = req.body.elo1_pre;
    pred.elo2_pre = req.body.elo2_pre;
    pred.elo_prob1 = req.body.elo_prob1;
    pred.elo_prob2 = req.body.elo_prob2;
    pred.elo1_post = req.body.elo1_post;
    pred.elo2_post = req.body.elo2_post;
    pred.qbelo1_pre = req.body.qbelo1_pre;
    pred.qbelo2_pre = req.body.qbelo2_pre;
    pred.qb1 = req.body.qb1;
    pred.qb2 = req.body.qb2;
    pred.qb1_value_pre = req.body.qb1_value_pre;
    pred.qb2_value_pre = req.body.qb2_value_pre;
    pred.qb1_adj = req.body.qb1_adj;
    pred.qb2_adj = req.body.qb2_adj;
    pred.qbelo_prob1 = req.body.qbelo_prob1;
    pred.qbelo_prob2 = req.body.qbelo_prob2;
    pred.qb1_game_value = req.body.qb1_game_value;
    pred.qb2_game_value = req.body.qb2_game_value;
    pred.qb1_value_post = req.body.qb1_value_post;
    pred.qb2_value_post = req.body.qb2_value_post;
    pred.qbelo1_post = req.body.qbelo1_post;
    pred.qbelo2_post = req.body.qbelo2_post;
    pred.score1 = req.body.score1;
    pred.score2 = req.body.score2;
// save the pred and check for errors
    pred.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New pred created!',
            data: pred
        });
    });
};
// Handle view pred info
exports.view = function (req, res) {
    nflPred.findById(req.params.nfl_id, function (err, pred) {
        if (err)
            res.send(err);
        res.json({
            message: 'nflGame details loading..',
            data: pred
        });
    });
};
// Handle update pred info
exports.update = function (req, res) {
nflPred.findById(req.params.nfl_id, function (err, pred) {
        if (err)
            res.send(err);
            pred.team1 = req.body.team1 ? req.body.team1 : pred.team1;
            pred.team2 = req.body.team2 ? req.body.team2 : pred.team2;
            pred.date = req.body.date;
            pred.season = req.body.season;
            pred.neutral = req.body.neutral;
            pred.playoff = req.body.playoff;
            pred.elo1_pre = req.body.elo1_pre;
            pred.elo2_pre = req.body.elo2_pre;
            pred.elo_prob1 = req.body.elo_prob1;
            pred.elo_prob2 = req.body.elo_prob2;
            pred.elo1_post = req.body.elo1_post;
            pred.elo2_post = req.body.elo2_post;
            pred.qbelo1_pre = req.body.qbelo1_pre;
            pred.qbelo2_pre = req.body.qbelo2_pre;
            pred.qb1 = req.body.qb1;
            pred.qb2 = req.body.qb2;
            pred.qb1_value_pre = req.body.qb1_value_pre;
            pred.qb2_value_pre = req.body.qb2_value_pre;
            pred.qb1_adj = req.body.qb1_adj;
            pred.qb2_adj = req.body.qb2_adj;
            pred.qbelo_prob1 = req.body.qbelo_prob1;
            pred.qbelo_prob2 = req.body.qbelo_prob2;
            pred.qb1_game_value = req.body.qb1_game_value;
            pred.qb2_game_value = req.body.qb2_game_value;
            pred.qb1_value_post = req.body.qb1_value_post;
            pred.qb2_value_post = req.body.qb2_value_post;
            pred.qbelo1_post = req.body.qbelo1_post;
            pred.qbelo2_post = req.body.qbelo2_post;
            pred.score1 = req.body.score1;
            pred.score2 = req.body.score2;
// save the pred and check for errors
        pred.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'nflPred Info updated',
                data: game
            });
        });
    });
};
// Handle delete game
exports.delete = function (req, res) {
    nflPred.remove({
        _id: req.params.nfl_id
    }, function (err, game) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'nflPred deleted'
        });
    });
};
