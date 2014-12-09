/**
* Module dependencies.
*/

var db = {};

/**
* Get.
*/

exports.get = function(key) {
  return function*() {
    return db[key];
  }
}

/**
* POST.
*/

exports.post = function(key, body) {
  return function* () {
    db[key] = body;
  }
}
