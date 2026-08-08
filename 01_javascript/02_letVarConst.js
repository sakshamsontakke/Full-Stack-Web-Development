// diffrence between let , var and const 
/*
    1. var is the global scoped whereas let and const is blockscoped
    2. var can update and re declared within scope 
    3. let can update but can't redeclare 
    4. const neither be updated or re declared 
*/

var a = 5;
{
    var a = 10;  // for all 'a' the value will be 10
    console.log(a); 
}
console.log(a);

let b  = 5;
{
    let b = 10;  // 'b' will be 10 only inside the scope 
    console.log(b);
}
console.log(b);

const value = 5;
// const value = 10;  this will throw error 