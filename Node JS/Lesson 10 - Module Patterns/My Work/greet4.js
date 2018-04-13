function const_greet(){
    this.greetings = "Welcome Prashanth!!!! - Greetings from 4";
    this.greet = function(){
        console.log(this.greetings);
    }
}

module.exports = const_greet;