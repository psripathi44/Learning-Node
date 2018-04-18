/* Using Node's event emitter */

var Emitter = require("events");
const readline = require('readline');

var emtr = new Emitter();

emtr.on('greetEven', function(){
    console.log('Greeting from Prashanth - its EVENly invoked.\n');
});

emtr.on('greetOdd', function(){
    console.log('Greeting from Prashanth - Its ODDly invoked.\n');
});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('\nEnter a number, node will invoke odd/even method: ', (inp) => {
    if(inp % 2 == 0)
        emtr.emit('greetEven');
    else
        emtr.emit('greetOdd');

    r1.close();
});


