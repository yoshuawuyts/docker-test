/**
 * Module dependencies.
 */

var request = require('supertest');
var app = require('..');

/**
 * Test.
 */

describe('API', function() {
  describe('/users', function() {
    it('POST /:user', function(done) {
      request(app.listen())
        .post('/users/bro')
        .type('json')
        .send({"username":"bro","password":"xyz"})
        .expect(204, done);
    });
    it('GET  /:user', function(done) {
      request(app.listen())
        .get('/users/bro')
        .type('json')
        .expect('{"username":"bro","password":"xyz"}')
        .end(done);
    });
  });
});
