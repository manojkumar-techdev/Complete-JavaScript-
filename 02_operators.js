
// arithmetic operator
let num1 = 10;
let num2 = 7;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
console.log(num1 / num2); // division - quotient
console.log(num1 % num2); // modulus - remainder
console.log(num1 ** num2); // exponentiation


// assignment operator
let num1 = 10;

num1 += 5;
console.log(num1);

num1 -= 5;
console.log(num1);

num1 *= 5;
console.log(num1);

num1 /= 5;
console.log(num1);

num1 %= 5;
console.log(num1);

num1 **= 5;
console.log(num1);


// Comparison operator
let x = 20;
let y = 30;

console.log(x > y); //false
console.log(x < y); //true
console.log(x >= y); //false
console.log(x <= y); //true
console.log(x == y); //false
console.log(x === y); //false
console.log(x != y); //true


// type conversion implicit conversion - Automatic
let result1 = "5" + 2;
let result2 = "5" + 20.25;
let result3 = "5" + true;

console.log(result1);
console.log(result2);
console.log(result3);

console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);


// type conversion implicit conversion - Automatic
let result1 = 2 + "5";
let result2 = 20.25 + "5";
let result3 = true + "5";

console.log(result1);
console.log(result2);
console.log(result3);

console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);


// type conversion
let str1 = "33";
let str2 = "66";
console.log(str1+str2);


// type conversion
let str1 = 33.33;
let str2 = 66.66;
console.log(str1+str2);


// type conversion
let str1 = 33;
let str2 = 66;
console.log(str1+str2);


// type conversion
let str1 = true;
let str2 = true;
console.log(str1+str2);


// type conversion
let str1 = true;
let str2 = false;
console.log(str1+str2);


// type conversion
let str1 = false;
let str2 = true;
console.log(str1+str2);


// explicit for - string to number
// explicit type conversion - manual type conversion
// using - Number()
let str = "123";
let numStr = Number(str);
console.log(numStr);
console.log(typeof numStr);


// explicit for - string to number
// explicit type conversion - manual type conversion
// using - parseInt()
let str = "123";
let numStr = parseInt(str);
console.log(numStr);
console.log(typeof numStr);



// explicit for - float to number
// explicit type conversion - manual type conversion
// using - parseFloat()
let str = "123.55";
let numStr = parseFloat(str);
console.log(numStr);
console.log(typeof numStr);


// explicit for - number to string
// explicit type conversion - manual type conversion
// using - String()
let str = 12345;
let numStr = String(str);
console.log(numStr);
console.log(typeof numStr);




// explicit for - number to string
// explicit type conversion - manual type conversion
// using - String()
let str = 12345;
let numStr = str.toString();
console.log(numStr);
console.log(typeof numStr);




// explicit boolean conversion
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false



// type conversion
let str1 = "5";
let int2 = 5;
console.log(str1 == int2);   // true



// type conversion
let str1 = "5";
let int2 = 5;
console.log(str1 === int2);   // true




// NaN
console.log(0 / 0);        // NaN
console.log(Number("abc")); // NaN
console.log(Math.sqrt(-1)); // NaN



// type of NaN
console.log(typeof NaN);



// NaN comparison
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false



// Number.isNaN()
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("abc"));   // false



// global isNaN()
console.log(isNaN("abc")); // true



// isNaN performs type conversion
// Number.isNaN() doesnt 
let value = Number("hello");

if (Number.isNaN(value)) {
    console.log("Invalid number");
}



// computer science error
let a = 0.1;
let b = 0.2;

let c = a + b;
console.log(c);
console.log(c == 0.3);



// computer science error - input as string
let a = Number("0.1");
let b = Number("0.2");

let c = a + b;
console.log(c);
console.log(c == 0.3);



// null is loosly equal to undefined
console.log(null == undefined);
console.log(null === undefined);

console.log(null == 0);
console.log(null === 0);

console.log(null == "");
console.log(null === "");

console.log(null == false);
console.log(null === false);



// >, <, >=, <= 
// allows type conversion
// conversion with null and null is converted 
// null converted to number
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log(null != 0);




// >, <, >=, <= 
// undefined converted to number as a NaN
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);
console.log(undefined != 0);



// null = 0
// NaN
console.log(null >= undefined);
console.log(undefined >= 0);



// String comparison - based on  ASCII Value
console.log("Rohit" > "Manoj");



// logical operator
let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age < 18 || age > 60); // false
console.log(!(age > 18));          // false



// bitwise operator
// Bitwise AND (&)
// Returns 1 only if both bits are 1.
console.log(5 & 3);


// Bitwise OR (|)
// Returns 1 if at least one bit is 1.
console.log(5 | 3);


// Bitwise XOR (^)
// Returns 1 when bits are different.
console.log(5 ^ 3);


// Bitwise NOT (~)
// Flips all bits.
console.log(~5);


// Left Shift (<<)
// Shifts bits to the left and fills zeros on the right.
console.log(5 << 1);


// Right Shift (>>)
// Shifts bits to the right while preserving the sign bit.
console.log(10 >> 1);


// Zero-fill Right Shift (>>>)
// Shifts right and fills leftmost bits with zeros.
console.log(-10 >>> 1);


// Ternary Operator
// Short form of if...else.
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


// Nullish Coalescing (??)
// Returns the right value only when the left value is null or undefined.
let name = null;
console.log(name ?? "Guest");