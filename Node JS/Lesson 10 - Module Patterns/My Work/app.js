/*Pattern 1 */
var greet1 = module.require("./greet1");
greet1();


/* Pattern 2 */
var greet2 = module.require("./greet2"); //or - var greet2 = module.require("./greet2").greet;
greet2.greet();                          //greet2();


/* Pattern 3 */
var greet3 = module.require("./greet3");
greet3.greet();

greet3.greetings = "Welcome Prashanth, from Charitha!!!";
var greet3_2 = module.require("./greet3");
greet3_2.greet();


/* Pattern 4 */
var greet4 = module.require("./greet4");
var greet4_1 = new greet4();
greet4_1.greet();

var greet4_2 = new greet4();
greet4_2.greetings = "I changed this using new object";
greet4_2.greet();


/* Pattern 5 */
var greet5 = module.require("./greet5"); //or - var greet5 = module.require("./greet5").greet;
greet5.greet();                          //greet5();