//Function in Javascript 
/*
    1.syntax for creating a new function is :
        function functionName(parameter1 , parameter2 , ..){
            code...
            return .....
        }
    2. we can't use any keywords as the name of the function eg. function function --> erorr
    3. we can't start the function name with number 
    4. can't use special character except '$'  and '_'
    
    # Another syntax for creating functions ( Arrow Function )
        const functionName = (parameter1 , parameter2 , ..) = {
            code..
            return...
        }
*/

// normal function
function avgNum(num1 , num2){
    return (num1+num2)/2;
}

let a = 10;
let b = 10;
console.log("the average of a and b is: " , avgNum(a , b));


// Arrow function 
const sum = (p , q) =>{
    return p+q;
}
let value1 = 11;
let value2 = 19;
console.log("the sum of value1 and value2 is:" , sum(value1 , value2));


// storing the return value from the function in a variable than printing it 
const greet = () => {
    console.log("hey guys how you doing??");
    return "hi";
}

greet();  // --> how you doing guys??
let hi = greet();
console.log(hi); // return somthing too




// Exercise:
const marks = {
    "saksham": 99,
    "john": 80,
    "arthur":70
}
for(let i = 0 ; i < Object.keys(marks).length ; i++){
    console.log("the marks of " + Object.keys(marks)[i]+ " is " +Object.values(marks)[i])
}

/*
    1. object.keys(objectName)
        --> object selects the object
        --> object.keys(objectName) selects the keys of this object 
        --> object.keys(objectName)[0] selects the a individual key

*/