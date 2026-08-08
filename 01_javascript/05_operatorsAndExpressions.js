// Operators and Expressions in javascript 
/*
    1. Arithematic Operators
        i)  +
        ii) -
        iii) *
        iv) ** (exponential)
        v) /
        vi) % 
        vii) ++
        viii) --
    2. Assignment Operator
        i) =  (x = y)
        ii) +=  (x = x + y)
        iii) -=   (x = x- y)
        iv) *=  (x = x*y)
        v) /=  (x = x/y)
        vi) %=  (x = x%y)
        vii) **=  (x = x**y)   
    3. comparision oeprators
        i)  == (equals to) 
        ii) != (not equals to)
        iii) ==== (equal value and type) 
        iv) !== (not equal to value and not equal to datatype)
        v) > (greater than)
        vi) < (smaller than) 
        vii) >= (greater than equal to)
        viii) <= (smaller than equal to) 
        ix) ? (ternary operator)
    4. Logical Operators
        i) && (true and false) ---> false
        ii) || (true or false) --> true
        iii) ! (logical not operator)    
*/


// Arithematic operators
let a = 10;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);
console.log(++a);
console.log(a++);
console.log(--b);
console.log(b++);

// Assignment Operator
let c = 5;
console.log(c += 5);
console.log(c -= 5);
console.log(c *= 5);
console.log(c /= 5);
console.log(c **= 5);
console.log(c %= 5);

// comparision oeprators
let num1 = 11;
let num2 = 22;

console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2);
console.log(num1 < num2);


// diffrence between "=="  and "==="
let temp1 = 9;
let temp2 = "9";
console.log(temp1 == temp2);  // --> true , since the values are same , datatyoe doesn't matter 
console.log(temp1 != temp2);  // --> false

console.log(temp1 === temp2) // --> false , since it also checks the datatype
console.log(temp1 !== temp2) // --> true\


// Logical Operators
if(true && false){ // all condition have to be true 
    console.log(true)
}
else{
   console.log(false)
}

if(true || false){   // any one conditon have to be true 
    console.log(true)
}
else{
    console.log(false)
}

if(!false){    // reverse the actaul condition 
    console.log(true)
}
else{
    console.log(false)
}

