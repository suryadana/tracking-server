'use strict';
module.exports = function (app) {
  const locationList = require('../controllers/locationListController');

  // location Routes
  app.route('/location')
    .get(locationList.list_all_location)
    .post(locationList.create_a_location);

  app.route('/location/:locationId')
    .get(locationList.read_a_location);
};
