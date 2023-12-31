const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    default: 'image/png',
    required: true,
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;