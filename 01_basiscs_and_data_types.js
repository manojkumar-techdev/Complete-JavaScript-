// first program
console.log("Manoj")


// declare variable
let name = "Rohit";
console.log(name);


// update variable
let name = "Rohit";
name = "Kumar";
console.log(name);


// var - assigned value can be updated (old-fashioned) 
var name = "Rohit";
name = "Kumar";
console.log(name);


// let - assigned value can be updated
let name = "Rohit";
name = "Kumar";
console.log(name);


// const - assigned value can be updated
const name = "Rohit";
name = "Kumar";
console.log(name);


// var issue - var can be declared again
var name = "Manoj";
var name = "Kumar";
console.log(name);


// let - can't be declared again with same name
let name = "Manoj";
let name = "Kumar";
console.log(name);

// const - can't be declared again with same name
const name = "Manoj";
const name = "Kumar";
console.log(name);


// declare multiple variable
let a, b, c;
a = 5;
b = 6;
c = 8;
d = a + b + c;
console.log(d);


// declare multiple variable in single line
let a, b, c;
a = 5; b = 6; c = 8;
d = a + b + c;
console.log(d);


// single line comment
let a = 10 // This is a single line comment


// multi-line comment
/*
multi-line
comment
*/
let a = 20;
console.log(a);


// variable naming
let my_name = "manoj";
let myName = "manoj";
let MyName = "manoj";
let _myName = "manoj";
let $myName = "manoj";


// primitive data types
// number
let num1 = 10;
let num2 = 20.12;
console.log(num1 + num2);


//  string
let name1 = "Manoj";
let name2 = 'Kumar';
let name3 = `Gupta`;


// boolean
let isLoggedIn = true;
let isAdmin = false;


// var - can be undefined
var user;
console.log(user)


// let - can be undefined
let user;
console.log(user)


// const - cannot be undefined
const user;
console.log(user)


// bigInt
// 3 bit example
// 1 bit 1 space
// 2 raise to power 3
// 2 x 2 x 2 = 8
let num1 = 3838383383883n;
console.log(num1)


// MAX_SAFE_INTEGER
// 9007199254740991
// 2^53 - 1
console.log(Number.MAX_SAFE_INTEGER);


// MIN_SAFE_INTEGER
// -9007199254740991
// 2^53 - 1
console.log(Number.MIN_SAFE_INTEGER);


// MAX & MIN safe integer error
// Mathematically wrong
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2


// use bigInt beyond 9007199254740991
// Safer now
const big = 9007199254740993n;
console.log(big); // 9007199254740993n


// checking if a number is safe
console.log(Number.isSafeInteger(100)); // true

console.log(
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);


// For Larger Integers: BigInt
const big = 9007199254740993n;
console.log(big);


// creating BigInt
const big = 123456789012345678901234567890n;
console.log(big);


// creating BigInt
const big = BigInt("123456789012345678901234567890");
console.log(big);


// Mixing BigInt and Number
// Not allowed directly:
const a = 10n;
const b = 5;
console.log(a + b);


// Convert one type to the other:
const a = 10n;
const b = 5;
console.log(a + BigInt(b));


// Convert one type to the other:
const a = 10n;
const b = 5;
console.log(Number(a) + b);


// null - intentional absence for no value
let weather = null;
console.log(weather);


// undefined vs null
let temp1 = 25;
let temp2 = null; // (exixts but error)
let temp3 = undefined; // (doesn't exist)


// undefined vs undefined vs zero
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true


// null vs null vs zero
console.log(null == null); // true
console.log(null === null); // true


// 0 vs 0 vs zero
console.log(0 == 0); // true
console.log(0 === 0); // true


// null vs undefined 
console.log(undefined == null); // true
console.log(undefined === null); // false


// null vs undefined 
console.log(undefined == 0); // false
console.log(undefined === 0); // false


// null vs undefined 
console.log(null == 0); // false
console.log(null === 0); // false


// symbol 
const id1 = Symbol("id");
console.log(id1);


// symbol comparison
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);


// non-primitive data types
// array
let arr = [10, 20, 30, 40, "Manoj", true, 10.35];


// object
const user = {
    name: "Manoj",
    city: "Berlin",
    age: 23
}

console.log(user);


// function - also can be stored in vriable
function add(){
    console.log("Hello");
}
add();


// typeof()
let num = 90;
console.log(typeof num);


// typeof()
let num2 = 30.25;
console.log(typeof num2);


// typeof()
let name = "Manoj"
console.log(typeof name);


// typeof()
let myBool = true;
console.log(typeof myBool);


// typeof()
let myNull = null;
console.log(typeof myNull);


// typeof()
let myUndefined = undefined;
console.log(typeof myUndefined);


// typeof()
let id2 = Symbol("id1");
console.log(typeof id2);


// typeof()
let arr = [10, 30];
console.log(typeof arr);


// typeof()
let obj = {
    name: "Manoj",
    city: "Berlin"
}
console.log(typeof obj)


// typeof()
function add(){
    console.log("Manoj");
}
console.log(typeof add);


// immutable data types - primitive data types
// primitive data once created cannot be changed
// new memory location allocated to updated value
// new momeory allocated
// variable points to updated one
let num1 = 10;
num1 = 20;
console.log(a);


// proof of immutability
let name1 = "Manoj";
name1 = "Kumar"
console.log(name1[0]);
name1 = "Gupta"
name1[0] = "S";
console.log(name1[0]);


// mutable data types - non-primitive(array)
let arr1 = [1, 3, 5, 7, 9];
arr1.push(90);
console.log(arr1);


// mutable data types - non-primitive(array)
let arr1 = [1, 3, 5, 7, 9];
arr1.push(90);
arr1[0] = 100;
console.log(arr1);


// mutable data types - non-primitive(object)
let obj = {
    name: "Manoj",
    city: "Berlin",
    age: 30
}

obj.name = "Rihan";
console.log(obj);


// immutable example - 2 (for primitive data)
// copy by value OR pass by value
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(a, b);


// mutable example - 2 (for primitive data)
// copy by value OR pass by value
let obj1 = {
    name: "Manoj",
    city: "Berlin",
    age: 30
}

let obj2 = obj1;
obj1.name = "Rihan";

console.log(obj1);
console.log(obj2);


// exponentiation notation
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123