/* Using Node's event emitter \
But this variation uses - a new module - config.js - Here we will create an object, that has different configuration values, 
which we will call EVents, and Events has properties, which would be the actual strings that are passed to Event Emitter*/


var Emitter = require("events");
const readline = require('readline');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREETEVEN, function(){
    console.log('Greeting from Prashanth - its EVENly invoked.\n');
});

emtr.on(eventConfig.GREETODD, function(){ 
    console.log('Greeting from Prashanth - Its ODDly invoked.\n');
});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('\nEnter a number, node will invoke odd/even method: ', (inp) => {
    if(inp % 2 == 0)
        emtr.emit(eventConfig.GREETEVEN);
    else
        emtr.emit(eventConfig.GREETODD);

    r1.close();
});

