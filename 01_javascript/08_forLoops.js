// For Loops in JavaScript 
/*
    # Types of For loops
    1. for loop --> loop a block of code number of times
    2. for in loop --> loops through the keys of an object
    3. for of loop --> loops through the values of an object
    4. while loop --> when we don't know anything about the condition
    5. do-while loop --> iterate atleast one time  
*/

// for loop : calculation the first nth sum of number using for loop
let num1 = 10;
let sum = 0; 
for(let i = 1 ; i <=10 ; i++){
    sum += i;
}
console.log("the total sum of number " , num1 , " till is " , sum);
   

// creating an object 
const marks = {
    "saksham": 99,
    "john"   : 70,
    "arthur" : 50
}

// for in loop
for (let a in marks){
    console.log("the marks of " , a , " are " , marks[a]);
}

// for of loop
for (let a of "marks"){
    console.log(a);
}


