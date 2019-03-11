'use strict';

const mongoose = require('mongoose'),
                 Location = mongoose.model('Location');

exports.list_all_location = function (req, res) {
  Location.find({}, function (err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.create_a_location = function (req, res) {
  const new_location = new Location(req.body);
  new_location.save(function (err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.read_a_location = function (req, res) {
  Location.findById(req.params.locationId, function (err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};
