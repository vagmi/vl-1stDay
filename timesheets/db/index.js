var db = global.db || {};

db.resetSchema = function(){
  this.clients = [];
  this.projects = [];
  this.users = [];
  this.assignments = [];
  this.timeEntries = [];
}
if(!global.hasOwnProperty('db')) {
  db.resetSchema();
  global.db = db;
}
exports.db = db;

