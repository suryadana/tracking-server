'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  device: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Location', LocationSchema);
