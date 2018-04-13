/* From the code written below - 
1) We cannot export multiple functions/variables outside this module to any other parent modules that are importing this module
2) If you have multiple variables that needs to be sent "Follow Senario 2"
*/

//Senario 1
/*
var hello1 = function (){
console.log("Hello!");
};

function testingSecondExport1(){
    console.log("This is a second test print!");
}

module.exports = hello1;
module.exports = testingSecondExport1;*/


//--------------------------------------------------------------------------------------------------//
//Senario 2
var hello2 = function (){
    console.log("Hello! from 2");
};

function testingSecondExport2(){
    console.log("This is a second test print! from 2");
}
module.exports = {hello2, testingSecondExport2};