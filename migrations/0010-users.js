
var mongodb = require('mongodb');

exports.up = function (db, next) {
    // get the collection
    var users = db.collection('users');
    var user = {
        firstName: "Misaki",
        lastName: "Tobisawa"
    };
    users.insert(user, next);
};

exports.down = function (db, next) {
    // get the collection
    var users = db.collection('user');
    // remove all users from the collection
    users.remove();
    next();
};
