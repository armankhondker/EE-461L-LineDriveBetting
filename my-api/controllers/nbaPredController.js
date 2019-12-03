// nbaPredModel.js
// Import game model
nbaPred = require('../models/nbaPredModel');



//Handle index actions
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
    nbaPred.find(query, function (err, games) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "NBA Predictions retrieved successfully",
            data: games
        });
    });
};
// Handle create game actions
exports.new = function (req, res) {
    var pred = new nbaPred();
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
    pred.carmElo1_pre = req.body.carmElo1_pre;
    pred.carmElo2_pre = req.body.carmElo2_pre;
    pred.carmElo_prob1 = req.body.carmElo_prob1;
    pred.carmElo_prob2 = req.body.carmElo_prob2;
    pred.carmElo1_post = req.body.carmElo1_post;
    pred.carmElo2_post = req.body.carmElo2_post;
    pred.raptor1_pre = req.body.raptor1_pre;
    pred.raptor2_pre = req.body.raptor2_pre;
    pred.raptor_prob1 = req.body.raptor_prob1;
    pred.raptor_prob2 = req.body.raptor_prob2;
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
    nbaPred.findById(req.params.nba_id, function (err, pred) {
        if (err)
            res.send(err);
        res.json({
            message: 'nbaGame details loading..',
            data: pred
        });
    });
};
// Handle update pred info
exports.update = function (req, res) {
nbaPred.findById(req.params.nba_id, function (err, pred) {
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
            pred.carmElo1_pre = req.body.carmElo1_pre;
            pred.carmElo2_pre = req.body.carmElo2_pre;
            pred.carmElo_prob1 = req.body.carmElo_prob1;
            pred.carmElo_prob2 = req.body.carmElo_prob2;
            pred.carmElo1_post = req.body.carmElo1_post;
            pred.carmElo2_post = req.body.carmElo2_post;
            pred.raptor1_pre = req.body.raptor1_pre;
            pred.raptor2_pre = req.body.raptor2_pre;
            pred.raptor_prob1 = req.body.raptor_prob1;
            pred.raptor_prob2 = req.body.raptor_prob2;
            pred.score1 = req.body.score1;
            pred.score2 = req.body.score2;
// save the pred and check for errors
        pred.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'nbaPred Info updated',
                data: game
            });
        });
    });
};
// Handle delete game
exports.delete = function (req, res) {
    nbaPred.remove({
        _id: req.params.nba_id
    }, function (err, game) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'nbaPred deleted'
        });
    });
};
