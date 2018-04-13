var person = {
    firstname : "Prashanth Kumar",
    lastname : "Sripathi",
    greet : function(){
        console.log(this.firstname + " " + this.lastname + " is learning Node JS and is excited about it!!!!");
    }
}

//Usual way of calling the function/variables
person.greet();
console.log(person.firstname);
console.log(person.lastname);

console.log();

//Another way of calling the functions/variables
console.log(person['firstname']);
console.log(person['lastname']);
console.log(person['greet']);