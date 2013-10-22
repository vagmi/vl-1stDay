var db = require('../db').db;
var Model = require('./model').Model;
var _ = require('underscore');
TimeEntry = function(options){
  _.extend(this,options);
}
Model.extend(TimeEntry, db.timeEntries);

exports.TimeEntry = TimeEntry;

