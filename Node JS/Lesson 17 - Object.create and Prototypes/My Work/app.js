//Object.create is a very simple, clean and clear way to set up a sequence of objects, objects that inherit from one another with in the chain.
var person = {
    firstname : '',
    lastname : '',
    greet : function (){
        console.log('Welcome ' + this.firstname + ' ' + this.lastname);
    }
}

var prashu = Object.create(person);
prashu.firstname = 'Prashanth Kumar';
prashu.lastname = 'Sripathi';
prashu.greet();


var cherry = Object.create(person);
cherry.firstname = 'Cherry';
cherry.lastname = 'Sripathi';
cherry.greet();