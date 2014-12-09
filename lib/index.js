/**
 * Module dependencies.
 */

var responseTime = require('koa-response-time');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var koa = require('koa');
var db = require('./memdb');

var env = process.env.NODE_ENV || 'development';
var port = process.env.port || 1337;

/**
 * App.
 */

var app = koa();

/**
 * Expose `app`.
 */

module.exports = app;

/**
 * Middleware.
 */

if ('test' != env) app.use(logger());
app.use(responseTime());

/**
 * GET user.
 */

app.use(route.get('/users/:name', function* getUser(name, next) {
  if (!this.is('json')) yield next;

  this.body = yield db.get(name);

  yield next;
}));

/**
 * POST user.
 */

app.use(route.post('/users/:name', function* postUser(name, next) {
  if (!this.is('json')) yield next;

  var body = yield parse.json(this);
  this.body = yield db.post(name, body);

  yield next;
}));

/**
 * Listen.
 */

if (!module.parent) {
  console.log('');
  console.log('  Port ' + port);
  console.log('  Env  ' + env);
  console.log('');
  app.listen(port);
}
