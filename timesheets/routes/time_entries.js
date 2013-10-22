var db = require('../db').db
var TimeEntry = require('../db/time_entry').TimeEntry
exports.create = function(req, res,next) {
  var timeEntry = TimeEntry.create(req.body);
  res.json(timeEntry);
}
exports.index = function(req, res, next) {
  res.json(db.timeEntries);
}
