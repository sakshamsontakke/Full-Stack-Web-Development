// Primitives Datatypes and Objects in javascript 
/*
    1. there are 7 primitive datattypes in javascript (inbuilt)
        trick:  N --> Null 
                N --> Number
                S --> Symbol
                S --> String
                B --> Boolean
                B --> Bigint
                U --> Undefined
    2. objects are KEY - VALUE pairs , it is a non-primitive datatype         
    3. we use (typeof variableNAme) to get the datatype of the variable        
*/

let a = null 
let b = 5 ;
let c = Symbol("hey this is saksham's symbol!") ;
let d = "saksham" ;
let e = true ;
let f = BigInt("1234567") ;
let g = undefined ;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// using typeof 
console.log(typeof f);

// objects in javascripts
const items = {
    "saksham" : true ,
    "james"   : false , 
    "robin"   : 67 ,
    "arthur"  : undefined
}
console.log(items["saksham"]); // --> output: true


// to add more items to the object we can write this 
// syntax: objectName["keyName"] = "valueName";
items["john"] = 15;
console.log(items);