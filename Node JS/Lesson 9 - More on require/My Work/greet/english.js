var greetings = module.require("./greetings.json");
var greet = function(){
    //console.log("Hello from English");
    console.log(greetings.en + " from English");
}

module.exports = greet;