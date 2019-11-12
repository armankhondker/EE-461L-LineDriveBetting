// blogController.js
// Import user model
blog = require('./blogModel');
// Handle index actions
exports.index = function (req, res) {
    blog.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Blog posts retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.new = function (req, res) {
    var user = new blog();
    user.username = req.body.username ? req.body.username : user.username;
    user.content = req.body.content;
    user.likes = req.body.likes;
    user.team1 = req.body.team1;
    user.team2 = req.body.team2;
    user.game_date = req.body.game_date;
// save the user and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New post created!',
            data: user
        });
    });
};
// Handle view user info
exports.view = function (req, res) {
    blog.findById(req.params.blog_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Account details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {
blog.findById(req.params.blog_id, function (err, user) {
        if (err)
            res.send(err);
            user.username = req.body.username ? req.body.username : user.username;
            user.content = req.body.content;
            user.likes = req.body.likes;
            user.team1 = req.body.team1;
            user.team2 = req.body.team2;
            user.game_date = req.body.game_date;
// save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Account Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    blog.remove({
        _id: req.params.blog_id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Account deleted'
        });
    });
};
