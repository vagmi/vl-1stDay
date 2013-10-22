var greeter= require('./greeter');
greeter.greet("Value labs");
var content = "";
greeter.readGreeting("./greeter.js", function(err, data){
  console.log(err);
  content =data.toString();
})
console.log("Sync call", content);

greeter.writeGreeting("./greeting.txt", "A new greeting from code", function(err){
  console.log("Done writing");
})
