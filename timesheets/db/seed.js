var db = require('../db').db;
var Client = require('./client').Client;
var Project = require('./project').Project;

exports.seed = function() {

  db.clients.push(new Client({id: 1, name: "Client1"}));
  db.projects.push(new Project({id: 1, name: "Project 1", client_id: 1}));
  db.projects.push(new Project({id: 2, name: "Project 2", client_id: 1}));

  db.users.push({id:1, name: "User 1", password: "password"});

  db.assignments.push({id: 1, user_id: 1, project_id: 1});
  db.assignments.push({id: 1, user_id: 1, project_id: 2});

};
