var greet1 = require("./greet1");
//greet1();  
/* Will error out - "greet1() is not a function", because greet1() will be set with "Module.exports", which was nowhere
 set in greet1.js, if you check, exports and module.exports both point to different locations but not same.
 So, that's the reason greet1 is set with nothing but an empty object
*/

var greet2 = require("./greet2");
greet2.greet();
/* In this case, we have mutated the exports, i.e., added a propery "greet" to the object
 So, when we call greet2.greet(), it wont error out.
*/