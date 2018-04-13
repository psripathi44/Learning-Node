var greetings = module.require("./greetings.json");
var greet = function(){
    //console.log("Hola from Spanish");
    console.log(greetings.es + " from Spanish");
}

module.exports = greet;