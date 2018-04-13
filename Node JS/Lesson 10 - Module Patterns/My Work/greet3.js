function const_greet(){
    this.greetings = "Welcome Prashanth!!! - Greetings from 3";
    this.greet = function(){
        console.log(this.greetings);
    }
}

module.exports = new const_greet();