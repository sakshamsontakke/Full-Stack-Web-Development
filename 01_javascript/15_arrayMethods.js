// Array Methods in Javascript
/*
    1. arr.toString()    --> converts the whole array into string
    2. arr.join()        --> joins all the array elements using separtor
                             eg.  arr.join(" and ") ->   1 and 2 and 3 and 4
    3. arr.pop()         --> deletes the last element from the actual Array (no need to create another array )  
                             and it return the poped element 
    4. arr.push()        --> it pushes a new element as the last index and returns the new length of the Array
                             also it adds a new element the the actual array (no need to create another array)
    5. arr.shift()       --> it removes the first element from the array and returns the deleted element
    6. arr.unshift()     --> it adds a new element at the begining of the Array and returns
                             THE NEW LENGTH OF THE ARRAY.
    7. delete arr[index] --> it deletes the particular index from the Array but the length of the array remains unaffected 
                             eg. delete arr[0]   -->  ["1 empty item" , 2 , 3 , 4 , 5 ] ; (length = 5)
    8. arr.concat(arr2)  --> it joins arrays together but we need to create another array since it can't change the orignal arrays(returns new array)
    9. arr.sort()        --> it sorts the array in alphabetically and it modifes the original Array  
                             but we can't use sort a array in ascending or decending order for numbered array for that we use
                             compare function we create a compre function with 2 arguments and returns (a-b) for ascending order
                             and (b-a) for decending order 
    10 arr.reverse()     --> it reverse the whole array and it mofies the orginal Array     
    11.arr.splice()      --> arr.splice(startValue  , numberOfElementToDeleteFromStartElement , newelement1 , newlement2 , ......);
                             it returns array of  deleted values      
    12. arr.slice(n)     --> it slices the array from n to last index
                             it can not modify the orignal array so we have to create a new array
    13. arr.slice(n , m) --> it slices the array from n to m-1(does not include the last element)
                             it can not modify the orignal array so we have to create a new array                       
*/

let arr = [1 , 2 , 3 , 4];

// arr.toString()
let arr1 = arr.toString();
console.log(arr1);  // --> 1,2,3,4
console.log(typeof arr1)

// arr.join()
let arr2 = arr.join(" and ");
console.log(arr2);  // --> 1 and 2 and 3 and 4
console.log(typeof arr2)

// deleting the last element directly from orignal array 
let deletedElement = arr.pop();
console.log(deletedElement , arr);  // --> 4

// adding a new element at the end of the Array directly too the orignal array 
let newLengthOfArray = arr.push("hey i'm a new value of the array");
console.log(newLengthOfArray , arr);  // --> 4


// removing the first element from the Array and returning the deleting element 
let deletedElementUsingShift =  arr.shift();
console.log(deletedElement , arr) ;

// adding a new elemnt at the begining of the Array and returning the NEW ARRAY LENGTH
let addedElementUsingUnshift = arr.unshift("hey i'm added using unshift()!!");
console.log(addedElementUsingUnshift , arr);


// deleting a element using 'delete'
delete arr[0];
console.log(arr);

// joining more than 1 arrays together
let concatArr1 = [11 , 22 , 33 , 44 , 55 ];
let concatArr2 = [10 , 20 , 30 , 40 , 50 ];
let concatedArray = arr.concat(concatArr1 , concatArr2);
console.log(concatedArray);


// sorting a array alphabetically and for numbers (ascending and decending)
let newArr = [11 ,33, 44, 22, 77, 99, 55 ,88 , 66];
newArr.sort() // --> it will sort the array in alphabetically order
console.log(newArr)


// for acending and decending order
let compareASC = (a , b) => {
    return a - b;  // accending order
}

let compareDEC = (a , b) => {
    return b - a;  //decending order
}

newArr.sort(compareASC) // --> it will sort the array in acending order
console.log(newArr)

newArr.sort(compareDEC) // --> it will sort the array in decending order
console.log(newArr)

// reversing the whole array 
console.log(arr);
arr.reverse();
console.log(arr);



// splice in javascript
let num = [ 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20 ]
let deletedValuesUsingSplice = num.splice(2 , 3 , 101 , 102 , 103 , 104 , 105)
console.log(deletedValuesUsingSplice);  // --> it return the array of deleted values eg. 6 , 10 , 12
console.log(num);
/*
    # The above code will work like this:
      the 2 -> means to start with second index
      the 3 -> means to delete 3 elements starting from 
               index 2 eg . delete 6 , 10 , 12 from num(array)      
      101 , 102 , 103 , 104 --> mean add these values to the the deleted values place
      note: we're deleting only 3 elements but we're adding 5 new elements , so the first 3 element will go 
            where the deletd values were and the remaing 2 values will be added after that (wihout deleting anything)
            it will increase the lenght of the array num.
    # output:       [ 6, 8, 10 ]
                    [2, 4 , 101 , 102 , 103 , 104 , 105 , 12 , 14 , 16 , 18 , 20]                    
*/


// slicing the Array 
// since it can not modify the orignal array so we have to create a new array  
let newSliceArray1 = num.slice(4);   // it slice from 4 to the end
let newSliceArray2 = num.slice(4 , 6)  // it slices from 4 to 6 (m-1)
console.log(newSliceArray1);
console.log(newSliceArray2);