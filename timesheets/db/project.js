var db = require('../db').db;
var _ = require('underscore');
var Project= function(options){
  _.extend(this, options);

}
Project.prototype.getClient = function(){
  return _.select(db.clients,function(client) {
    return client.id == this.id;
  });
}

exports.Project = Project;
