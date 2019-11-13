// blogModel.js
var mongoose = require('mongoose');
// Setup schema
var blogSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: {
    type: String,
    default: '0'
  },
  team1: {
    type: String
  },
  team2: {
    type: String
  },
  game_date: {
    type: String
  },
  create_date: {
      type: Date,
      default: Date.now
  }
}, {collection: 'blog_posts'});
// Export Contact model
var blog = module.exports = mongoose.model('blog', blogSchema);
module.exports.get = function (callback, limit) {
    blog.find(callback).limit(limit);
}
