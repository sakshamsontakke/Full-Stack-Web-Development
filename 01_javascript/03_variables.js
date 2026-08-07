// Varibles in Javascript 

/*
    1. you can't use any special character except "$" and "_"
    2. can't start with a number 
    3. can't use keywords as variables name (eg. let let = 5; --> wrong)
    4. 'const'  --> makes the variables immutable
*/

//basic sysntax

let variable1 = 5;
console.log(variable1);

let _specialVariable = 10;
let $specialVarible = 20;
console.log(_specialVariable);
console.log($specialVarible);

// let 3wrongVaribale = 30; ---> wrong 
// let let = 30; ---> wrong 



//creating a contant variable 
const newVariable = 100;
// newVariable = 20; ---> error since newVariable is constant 