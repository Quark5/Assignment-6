var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  app.set('port', (process.env.PORT || 5000));
  app.listen(app.get('port'), function() {
    console.log('App listening on port', app.get('port'));
  });
};
