// Operator Precedance
/* 
    1. '/' and '*' ---> same priority (if both are there we calculate from left to right)
    2. '+' and '-' --> same priority (if both are there we calculate from left to right)
    3. we can change the priority by using brackets ---> '()' 
*/

console.log(1/2*3);  // left to right
console.log(1+1-1); //left to right
 
console.log(1+1*3); //priority of '*' > '+'
console.log((1+1)*3); //changing priority using brackets

console.log(1+1/3); //priority of '/' > '+'
console.log((1+1)/3); //changing priority using brackets
