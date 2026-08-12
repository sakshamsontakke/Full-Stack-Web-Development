// Map, Filter & Reduce in Javascript
/*
    1. forEach()  --> syntax: arr.forEach((currentValue , currentIndex , WholeArray) => {
                                code.....
                              })
                      i) currentValue  --> current element we're targeting
                      ii) currentIndex --> index of current element we're targeting
                      iii) wholeArray  --> it just gives return the whole array thats it in out case it's "arr"
                      iv) forEach()    --> we can use return too
                      v) forEach()    --> it doesn't creates another array! (important)
    2. map()      --> syntax: arr.map((currentValue , currentIndex , WholeArray) => {
                                code.....
                              })  
                      i) currentValue  --> current element we're targeting
                      ii) currentIndex --> index of current element we're targeting
                      iii) wholeArray  --> it just gives return the whole array thats it in out case it's "arr"
                      iv) map()        --> we can use return too
                      v) map()         --> it does creates another array!! (important)     
    3. filter()    --> syntax: arr.filter((currenValue) => {
                              return currentValue>10;
                              .....
                              })
                      i) it work like a filter , it filters the value as per the conditon given
                      ii) it does create another array !! (important)
    4. reduce()    --> syntax: arr.reduce((value1(accumulator) , value2(current value)) => {
                                return value1 + value2  
                              })
                       i) suppose there is an array arr = [1 , 2 , 3 , 4 , 5]
                       ii) reduce takes argument value1 and value2 
                       iii) value1 is index 0 eg. 1 and value2 is index 1 eg.2 
                       iv) it's adding those two
                       v) now the sum becomes value1 and value2 becomes index eg.3
                       vi) it repeats till the end 
                       vii) it creates new array!   
                       viii) accumulator: Stores the ongoing accumulated result returned from the previous iteration.
                       ix) currentValue: The current element being processed in the array.
                       x) initialValue (Optional): The value initialized as the accumulator on the very first loop. 
                          If omitted, the first element of the array becomes the initial accumulator, and the loop starts on the second element.   
*/

// forEach --> same array
let num = [11,22,33,44]
num.forEach((element , index , array) => {
    console.log(element ,index ,array)
})
console.log(num)

// map() --> creates new array
let mapArr = num.map((element ,index , array) => {
    console.log(element ,index , array);
    return element*element;
})
console.log(mapArr)

// filter()  --> filter stuffs and creates new array
let filterArr = num.filter((element) => {
    return element < 33;
})
console.log(filterArr);

// reduce() 
let newArr = [1 , 2 , 3 , 4 , 5]
let reduceArr1 = newArr.reduce((value1 , value2) => {
    return value1 + value2;
})
console.log(reduceArr1);   // output --> 15

// we can also write this as
let sumFunction = (v1 ,v2) =>{
    return v1 + v2;
}
let reduceArr2 = newArr.reduce(sumFunction);
console.log(reduceArr2); 