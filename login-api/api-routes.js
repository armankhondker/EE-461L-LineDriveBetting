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
// Import controllers
var accountController = require('./controllers/accountController');
var blogController = require('./controllers/blogController');

// account routes
router.route('/accounts')
    .get(accountController.index)
    .post(accountController.new);
router.route('/accounts/:account_id')
    .get(accountController.view)
    .patch(accountController.update)
    .put(accountController.update)
    .delete(accountController.delete);
// blog routes
router.route('/blog_posts')
    .get(blogController.index)
    .post(blogController.new);
router.route('/blog_posts/:blog_id')
    .get(blogController.view)
    .patch(blogController.update)
    .put(blogController.update)
    .delete(blogController.delete);

// Export API routes
module.exports = router;
