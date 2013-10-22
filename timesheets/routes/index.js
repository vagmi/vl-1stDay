
/*
 * GET home page.
 */
var db = require('../db').db;
exports.index = function(req, res){
  console.log(db);
  res.render('index', { title: 'Express', content: db.name });
};
