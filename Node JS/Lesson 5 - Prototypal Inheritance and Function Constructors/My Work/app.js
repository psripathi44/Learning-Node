function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

person.prototype.greet = function(){
    console.log('Hello '+ this.firstname + ' ' + this.lastname);
};
person.prototype.val = 10;

var prashanth = new person('Prashanth Kumar', 'Sripathi');
//console.log(prashanth.firstname + " " + prashanth.lastname);
prashanth.greet();

var charitha = new person('Charitha', 'Prashanth');
charitha.greet();


console.log(prashanth.__proto__); //Prints the functions and variables that are associated with the object 'prashanth'
console.log(charitha.__proto__); //Prints the functions and variables that are associated with the object 'charitha'
console.log(prashanth.__proto__ === charitha.__proto__);