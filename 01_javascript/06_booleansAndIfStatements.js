// booleans and If statements 
/*
    1. diffrence between '=='  and '===':
        i) '==' --> it makes both the arguments datatype equal than checks it (conversion behavior)
            for exmaple: 5 == "5.00" ---> true (since java scripts converts the string into integer which suits with the other value then compare it )
        ii) '===' --> to compare the data type too we use '===' 
            for example: 5 === "5.00" ---> false (since this time it is compairing the datatype too)     
        iii) id the value are already same it works as it is 
            for example 
        iv) if you want to compare some values instead of writing '!=' try using this '!==' instead for better results since it also compares the datatype
            and does not shows any conversion behavior          
*/



// '==' and '===' operators
console.log(5 == "5.00"); //-->true
console.log(5 === "5.00"); //-->false
console.log(5 === 5);


/*
    if-else statements in javascript
    1. if(condition){
       code... 
    }
    
    2. else if(condition){
        code...
    }

    else{
        code...(no condition required)    
    }      
*/

if(true){
    console.log("hello world");
}

if(false){  // program will not work since the conditon is false 
    console.log("hello world");
}