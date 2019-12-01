// mlbController.js
// Import game model
mlbPred = require('./mlbPredModel');
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
                  '$gte': '2019-10-24'
              }
          }, {
              'date': {
                  '$lte': 'nextWeekDate'
              }
          }
      ]
  };
  mlbPred.find(query, function (err, games) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "MLB Predictions retrieved successfully",
            data: games
        });
    });
};
// Handle create game actions
exports.new = function (req, res) {
    var pred = new mlbPred();
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
    pred.rating1_pre = req.body.rating1_pre;
    pred.rating2_pre = req.body.rating2_pre;
    pred.pitcher1 = req.body.pitcher1;
    pred.pitcher2 = req.body.pitcher2;
    pred.pitcher1_rgs = req.body.pitcher1_rgs;
    pred.pitcher2_rgs = req.body.pitcher2_rgs;
    pred.pitcher1_adj = req.body.pitcher1_adj;
    pred.pitcher2_adj = req.body.pitcher2_adj;
    pred.rating_prob1 = req.body.rating_prob1;
    pred.rating_prob2 = req.body.rating_prob2;
    pred.rating1_post = req.body.rating1_post;
    pred.rating2_post = req.body.rating2_post;
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
    mlbPred.findById(req.params.mlb_id, function (err, pred) {
        if (err)
            res.send(err);
        res.json({
            message: 'mlbGame details loading..',
            data: pred
        });
    });
};
// Handle update pred info
exports.update = function (req, res) {
mlbPred.findById(req.params.mlb_id, function (err, pred) {
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
            pred.rating1_pre = req.body.rating1_pre;
            pred.rating2_pre = req.body.rating2_pre;
            pred.pitcher1 = req.body.pitcher1;
            pred.pitcher2 = req.body.pitcher2;
            pred.pitcher1_rgs = req.body.pitcher1_rgs;
            pred.pitcher2_rgs = req.body.pitcher2_rgs;
            pred.pitcher1_adj = req.body.pitcher1_adj;
            pred.pitcher2_adj = req.body.pitcher2_adj;
            pred.rating_prob1 = req.body.rating_prob1;
            pred.rating_prob2 = req.body.rating_prob2;
            pred.rating1_post = req.body.rating1_post;
            pred.rating2_post = req.body.rating2_post;
            pred.score1 = req.body.score1;
            pred.score2 = req.body.score2;
// save the pred and check for errors
        pred.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'mlbPred Info updated',
                data: game
            });
        });
    });
};
// Handle delete game
exports.delete = function (req, res) {
    mlbPred.remove({
        _id: req.params.mlb_id
    }, function (err, game) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'mlbPred deleted'
        });
    });
};
