// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import nfl controller
var nflController = require('./nflController');
var nbaController = require('./nbaController');
var mlbController = require('./mlbController');
var nflPredController = require('./nflPredController');
var nbaPredController = require('./nbaPredController');
var mlbPredController = require('./mlbPredController');

// nfl routes
router.route('/nfl')
    .get(nflController.index)
    .post(nflController.new);
router.route('/nfl/:nfl_id')
    .get(nflController.view)
    .patch(nflController.update)
    .put(nflController.update)
    .delete(nflController.delete);

//nba routes
router.route('/nba')
    .get(nbaController.index)
    .post(nbaController.new);
router.route('/nba/:nba_id')
    .get(nbaController.view)
    .patch(nbaController.update)
    .put(nbaController.update)
    .delete(nbaController.delete);

//mlb routes
router.route('/mlb')
    .get(mlbController.index)
    .post(mlbController.new);
router.route('/mlb/:mlb_id')
    .get(mlbController.view)
    .patch(mlbController.update)
    .put(mlbController.update)
    .delete(mlbController.delete);

//nfl pred routes
router.route('/nfl_pred')
    .get(nflPredController.index)
    .post(nflPredController.new);
router.route('/nfl_pred/:nfl_id')
    .get(nflPredController.view)
    .patch(nflPredController.update)
    .put(nflPredController.update)
    .delete(nflPredController.delete);

//nba pred routes
router.route('/nba_pred')
    .get(nbaPredController.index)
    .post(nbaPredController.new);
router.route('/nba_pred/:nba_id')
    .get(nbaPredController.view)
    .patch(nbaPredController.update)
    .put(nbaPredController.update)
    .delete(nbaPredController.delete);

//mlb pred routes
router.route('/mlb_pred')
    .get(mlbPredController.index)
    .post(mlbPredController.new);
router.route('/mlb_pred/:mlb_id')
    .get(mlbPredController.view)
    .patch(mlbPredController.update)
    .put(mlbPredController.update)
    .delete(mlbPredController.delete);

// Export API routes
module.exports = router;
