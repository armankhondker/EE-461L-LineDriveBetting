// nbaController.js
// Import game model
nbaGame = require('./nbaModel');
// Handle index actions
exports.index = function (req, res) {
    nbaGame.get(function (err, games) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "nbaGames retrieved successfully",
            data: games
        });
    });
};
// Handle create game actions
exports.new = function (req, res) {
    var game = new nbaGame();
    game.team1 = req.body.team1 ? req.body.team1 : game.team1;
    game.team2 = req.body.team2 ? req.body.team2 : game.team2;
    game.time = req.body.time;
    game.date = req.body.date;
    game.opening_ps_1 = req.body.opening_ps_1;
    game.opening_ml_1 = req.body.opening_ml_1;
    game.opening_ps_2 = req.body.opening_ps_2;
    game.opening_ml_2 = req.body.opening_ml_2;
    game.bovada_ps_1 = req.body.bovada_ps_1;
    game.bovada_ml_1 = req.body.bovada_ml_1;
    game.bovada_ps_2 = req.body.bovada_ps_2;
    game.bovada_ml_2 = req.body.bovada_ml_2;
    game.betonline_ps_1 = req.body.betonline_ps_1;
    game.betonline_ml_1 = req.body.betonline_ml_1;
    game.betonline_ps_2 = req.body.betonline_ps_2;
    game.betonline_ml_2 = req.body.betonline_ml_2;
    game.intertops_ps_1 = req.body.intertops_ps_1;
    game.intertops_ml_1 = req.body.intertops_ml_1;
    game.intertops_ps_2 = req.body.intertops_ps_2;
    game.intertops_ml_2 = req.body.intertops_ml_2;
    game.sportsbetting_ps_1 = req.body.sportsbetting_ps_1;
    game.sportsbetting_ml_1 = req.body.sportsbetting_ml_1;
    game.sportsbetting_ps_2 = req.body.sportsbetting_ps_2;
    game.betnow_ps_1 = req.body.betnow_ps_1;
    game.betnow_ml_1 = req.body.betnow_ml_1;
    game.betnow_ps_2 = req.body.betnow_ps_2;
    game.betnow_ml_2 = req.body.betnow_ml_2;
// save the game and check for errors
    game.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New game created!',
            data: game
        });
    });
};
// Handle view game info
exports.view = function (req, res) {
    nbaGame.findById(req.params.nba_id, function (err, game) {
        if (err)
            res.send(err);
        res.json({
            message: 'nbaGame details loading..',
            data: game
        });
    });
};
// Handle update game info
exports.update = function (req, res) {
nbaGame.findById(req.params.nba_id, function (err, game) {
        if (err)
            res.send(err);
            game.team1 = req.body.team1 ? req.body.team1 : game.team1;
            game.team2 = req.body.team2 ? req.body.team2 : game.team2;
            game.time = req.body.time;
            game.date = req.body.date;
            game.opening_ps_1 = req.body.opening_ps_1;
            game.opening_ml_1 = req.body.opening_ml_1;
            game.opening_ps_2 = req.body.opening_ps_2;
            game.opening_ml_2 = req.body.opening_ml_2;
            game.bovada_ps_1 = req.body.bovada_ps_1;
            game.bovada_ml_1 = req.body.bovada_ml_1;
            game.bovada_ps_2 = req.body.bovada_ps_2;
            game.bovada_ml_2 = req.body.bovada_ml_2;
            game.betonline_ps_1 = req.body.betonline_ps_1;
            game.betonline_ml_1 = req.body.betonline_ml_1;
            game.betonline_ps_2 = req.body.betonline_ps_2;
            game.betonline_ml_2 = req.body.betonline_ml_2;
            game.intertops_ps_1 = req.body.intertops_ps_1;
            game.intertops_ml_1 = req.body.intertops_ml_1;
            game.intertops_ps_2 = req.body.intertops_ps_2;
            game.intertops_ml_2 = req.body.intertops_ml_2;
            game.sportsbetting_ps_1 = req.body.sportsbetting_ps_1;
            game.sportsbetting_ml_1 = req.body.sportsbetting_ml_1;
            game.sportsbetting_ps_2 = req.body.sportsbetting_ps_2;
            game.betnow_ps_1 = req.body.betnow_ps_1;
            game.betnow_ml_1 = req.body.betnow_ml_1;
            game.betnow_ps_2 = req.body.betnow_ps_2;
            game.betnow_ml_2 = req.body.betnow_ml_2;
// save the game and check for errors
        game.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'nbaGame Info updated',
                data: game
            });
        });
    });
};
// Handle delete game
exports.delete = function (req, res) {
    nbaGame.remove({
        _id: req.params.nba_id
    }, function (err, game) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'nbaGame deleted'
        });
    });
};
