/* 
First class functions: 
Everything you can do with other types you can do with functions.
You can use functions like strings, numbers etc. (i.e., pass them around, set variables equal to functions, put functions in arrays and more)
*/

function greet(){
    console.log("Hi");
}
greet();


//Functions are first-class - Creating a parameterized function, that takes another function as parameter
function greetingAgain(param){
    param();
}
greetingAgain(greet);


//Function expression - Writing and storing a function to a variable
var greetingVar = function(){
    console.log("Greetings Sripathi!");
}
greetingVar();


//It's first class - Calling function greetingAgain by passing another function as parameter, because we can do that.
greetingAgain(greetingVar);


//Using a function expression on the fly, eradicating the need to store function to a variable if need to be called only once.
greetingAgain(function(){
    console.log("Greetings from the final!");
});