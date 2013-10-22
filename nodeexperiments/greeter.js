var fs = require('fs');
exports.greet = function(name){
  console.log("Hello " + name);
};
exports.readGreeting = function(filepath,next) {
  fs.readFile(filepath,next);
};
exports.writeGreeting = function(filepath, content, next) {
  fs.writeFile(filepath, content, next);
}
