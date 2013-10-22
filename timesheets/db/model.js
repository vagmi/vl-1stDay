var _ = require('underscore');

var Model = {}
Model.extend = function(klass, collection){
  _.extend(klass,{
    collection: collection,
    create: (function(options) {
      var obj = new klass(options);
      collection.push(obj)
      return obj;
    }).bind(klass)
  });
}
exports.Model = Model;
