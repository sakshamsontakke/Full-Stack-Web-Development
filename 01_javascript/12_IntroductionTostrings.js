// Strings Basics
/* 
    1. if you add string to a integer , the integer becomes a string and get connected to the string.
    2. if you use     \' or \"  the qoutes will act as a character so that you can use them inside a string.
    3. /n --> newline character
    4. use typeof() to get datatype 
    5. to insert values direclty into the string we use 
        syntax--->  ${ value... }
    6. creating a string using `Backticks`  (``) [ this is called template string]
        --->Backticks (`) are punctuation marks used in computer programming and text 
        formatting to designate code blocks, template strings, and shell commands
*/

console.log("this is my string1 " + 50 );
console.log(typeof("this is my string1 " + 50) );  //--> output: string

console.log( 100 + "this is my string2 ");
console.log(typeof(100 + "this is my string2 ") );  //--> output: string

console.log("hey , i\'m saksham!");
console.log("do you know any thing about \"pyramids\"? ");

console.log("this is the first line \nthis is the second line");

console.log(`the price of this product is ${20+50} $`);

// slicing of a string
let str = "GAME";
console.log(str[0]);  // --> G
console.log(str[1]);  // -->A