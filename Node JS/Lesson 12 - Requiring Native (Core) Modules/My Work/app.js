//Using require to load Native or Core modules, instead of local modules we created

var util = require("util"); //You will not specify, "./" before the util, because you want the control to utilities native module
                            //Otherwise, it would look in your current directory for "util.js"
                            //By the way - "util" is a native node js module
                            //Link to refer to - https://nodejs.org/dist/latest-v8.x/docs/api/util.html

var name = "Prashanth Sripathi";
var greeting = util.format("Hello %s, Welcome to using require with Native modules", name);

util.log(greeting);
console.log(greeting);