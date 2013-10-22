var db = require('../db').db;
var _ = require('underscore');
Client = function(options){
  _.extend(this,options);
}
Client.prototype.getProjects = function(){
  return _.select(db.projects,(function(project) {
    console.log(this);
    return project.client_id == this.id;
  }).bind(this));
};

exports.Client=Client;
