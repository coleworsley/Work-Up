var assert = require('assert');
var request = require('request');
var app = require('../controller');

describe('Controller', function() {

  before(function(done) {
    this.port = 9876;
    this.server = app.listen(this.port, function(err, result) {
      if (err) { return done(err); }
      done();
    });
  });

  after(function() {
    this.server.close();
  });

  it('should exist', function() {
    assert(app);
  });

  describe('GET /', function() {

  });

});
