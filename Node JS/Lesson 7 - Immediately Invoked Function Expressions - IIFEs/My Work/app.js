firstname = "Charitha";

(function (lastname){
    var firstname = "Prashanth";
    console.log("Hello " + firstname);
}("Sripathi"));

//firstname = "Charitha";
console.log(firstname);

/*This would also produce the same output
Hello Prashanth
Charitha

That is because the scope of the variable firstname is constricted to the IIFE,
and because of the same, the copy of "firstname = "Charitha"" did not get overridden by the "firstname = "Prashanth"" 

You can also pass parameters to the IIFE as shown above*/