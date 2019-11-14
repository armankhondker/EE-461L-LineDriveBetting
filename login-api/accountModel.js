// accountModel.js
var mongoose = require('mongoose');
// Setup schema
var accountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_date: {
      type: Date,
      default: Date.now
  }
}, {collection: 'accounts'});
// Export Contact model
var account = module.exports = mongoose.model('account', accountSchema);
module.exports.get = function (callback, limit) {
    account.find(callback).limit(limit);
}
