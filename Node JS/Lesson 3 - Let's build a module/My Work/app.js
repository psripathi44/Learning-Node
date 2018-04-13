//Scenario 1
/*var greeting = require("./greet");
greeting();
*/

//Scenario 2
var greeting = require("./greet").hello2;
var two = require("./greet").testingSecondExport2;
greeting();
two();