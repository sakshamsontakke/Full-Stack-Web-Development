// String Methods in Javascript
/*
    1. length: give length of the string
        eg. let a = "somthing"
            console.log(a.length)
            --> 8
    2.toUpperCase() --> makes string uppercase 
    3.toLowerCase() --> makes string lowercase

    4. slice(startingValue , endingValue) --> ending value give n-1 in return 
      -->if we don't pass any value eg a.slice(2)  --> it will give string from index 2 to END

    5. replace(oldValue , newValue); ---> it replaces a part from the string 
    6. concat(stringToAdd1 , stringToAdd2, ...) -->  joins to string
    7. trim()  --> removes white spaces from the string 

    # VERY IMPORTANT!!!
    --> String are Immutable , inorder to use change the string by using these method we have to create another string 
*/


let str =  "Somthing";
let str2 = "  adding me1  "

console.log(str.length);  // this gives the lenght of string
console.log(str.toUpperCase());  // this make the string upper case
console.log(str.toLowerCase());  // this makes the string lower case
console.log(str.slice(2 , 4));  // this slice the string from 2 to 3 index
console.log(str.slice(2));  //this slice the strin gfrom 2 to end of string
console.log(str.replace("Som" , "no"));  // this replcae the "som" with "no" in string 
console.log(str.concat(str2));  // this add another string to string 
console.log(str2.trim());  // this removes white spaces from the string


// String are immutable 
console.log(str); // output: Somthing (nothing changes)

let NewString = str.replace("Som" , "no");
console.log(NewString);  // output: nothing (now changes is possible)



// Practice - String 
/*
    1.includes() --> this function check if a word passes exists in the string or not 
    2. 
*/

let word = "saksham";
let sentance  = " my name is saksham";
console.log(`the word ${word} ${sentance.includes(word)? "is" : "is not"} in the sentance`);