/**
 * Module dependencies.
 */

var levelup = require('levelup');
var wrap = require('co-level');

var path = process.env.DB || './.leveldb';
console.log(path)
var options = {};
options.valueEncoding = options.valueEncoding || 'json';
var db = wrap(levelup(path, options));

/**
 * Get.
 */

exports.get = function(key) {
  return function*() {

    try {
      var res = yield db.get(key);
    } catch(e) {
      console.error(e);
      throw (e);
    }

    res = res;
    return res;
  }
}

/**
 * POST.
 */

exports.post = function(key, body) {
  return function* () {

    try {
      yield db.put(key, body);
    } catch(e) {
      console.error(e);
      throw e;
    }
  }
}
