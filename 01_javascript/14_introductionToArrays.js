// Introduction to Arrays in Javascript 
// Arrays are those varibles which can hold more than one value
/*
    1. arrays in javascript is just like a lists in python they both can store heterogeneous types in in single array or list 
       eg. arr = [ 1, 2, 3, 4,"hello world" , true]; 
    2. where as in c++ we we can only stores homogeneous data types 
       eg. int arr[] = [1 ,2, 3, 4,] ;  
    3. we can change the value of array by selecting the index 
        eg. arr[1] = 20;
    4. if the selected value does not exist in the array then a new values is added      
*/


// Creating a array
let arr = [1 , 2 , 3 , 4 , "hello world" , true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

console.log(arr[6]); // this will give the "undefined" since index six does not exist 

// Modifying the Array
arr[0] = "changed value 1";
arr[1] = "changed value 2";
console.log(arr[0]);
console.log(arr[1]);


// Adding a new element ot the Array 
arr[6] = "Hey i'm the new element in the Array!!";
console.log(arr[6]);
console.log(arr);
