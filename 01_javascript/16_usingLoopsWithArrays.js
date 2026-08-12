// Using Loops With Arrays in Javascript
/*
    1. forEach(() => {})  --> it works for each and every element
    2. Array.from()       --> it creates array from something eg. string
                              we use Array.from() to create Array from html collection
                              since we can't run forEach loop on html collection
    3. for of loop        --> it gives all the elements of the array
    4. for in loop        --> it gives all the indexes of the array                           
*/

let num = [ 11 , 22 , 33 , 44 , 55 , 66 , 77 , 88 , 99 ]

// forEach loop
num.forEach((element) => {
    console.log(element*element);   // multiplying each individual elements with itself
})

// Array.from()
let str = "saksham";
let strArr = Array.from(str);
console.log(strArr);

// for of loop
for(let items of num){
    console.log(items);
}


// for in loop (for index)
for(let index in num){
    console.log(index);
}


// old method to itterate array
for(let i = 0 ; i < num.length ; i++){
    console.log(i);
}