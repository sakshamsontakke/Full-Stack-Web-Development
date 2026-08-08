// Conditional expressions in Javascript
/*
    1.basic if else statments or conditionnal statements
    2.switch case method
    3.use of ternary operator
*/

// let age = prompt("enter you age: ");
// age = Number.parseInt(age);

// if(age < 0){
//     console.log("invalid age!!");
// }
// else if(age < 18  && age > 16){
//     console.log("you can't drive yet!!");
// }
// else if(age > 200){
//     console.log("it good you're this healthy to be alive but not recommend to drive!!");
// }
// else{
//     console.log("you can drive!!");
// }


//switch-case  ( comment out the above code to make sure it works in terminal )
let marks = Math.floor(Math.random()*3);
switch (marks) {
    case 0:
        console.log(marks);
        break;
    case 1:
        console.log(marks);
        break;
    case 2:
        console.log(marks);
        break;
    default:
        break;
}

// Ternary Operator in Javascript
// synatx: condition? exp1 : exp2 ;
//exp1--> if conditon is true
//exp2--> if condition is false

let money = 20;
console.log("i think we have around " , money>10? "20 rupees":"less than 20 rupees");