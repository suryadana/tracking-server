const express = require('express'),
              app = express(),
              port = process.env.PORT || 3000,
              mongoose = require('mongoose'),
              Location = require('./api/models/locationListModel'), // create model loading here
              bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/tracker_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/locationListRoutes'); // importing route
routes(app); // register the route

app.listen(port);

console.log('Tracking RESTful API server started on: http://localhost:' + port);
