// practice of arry ay in Javascript

// program 1
let arr1 = [1,2,3,4];
let newNumberToBePushed = 10;
arr1.push(newNumberToBePushed);
console.log(arr1);

// program 2
let arr2 = [10 , 22 , 32 , 40 , 55];
let newFilterArr = arr2.filter((element) => {
    return element%10 == 0;
})
console.log(newFilterArr);

// program 3
let arr3 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
let newMapArr = arr3.map((element) => {
    return element*element;
})
console.log(newMapArr);

// program 4
let arr4 = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
let reduceArr = arr4.reduce((v1 , v2) => {
    return v1*v2;
})
console.log(reduceArr);