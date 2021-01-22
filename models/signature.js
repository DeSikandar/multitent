const mongoose = require('mongoose');

const signatureSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  comment: String,
});

module.exports = mongoose.model('signature', signatureSchema);
