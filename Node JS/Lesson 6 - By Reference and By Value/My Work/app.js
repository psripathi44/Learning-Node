//Pass by value
function passByValue(b){
    b = 2;
}

a = 1;
passByValue(a);
console.log(a);


//Pass by Reference
function passByReference(d){
    d.prop1 = {};
    d.prop2 = {};
}

c = {};  //Defining c as an empty object here - which is important
c.prop1 = function (){}; //Assigning an empty function to the prop1 of c 
passByReference(c); //Calling the function passByReference with c, where the properties of c will be 
                    //changed by the variables in the function
console.log(c);

