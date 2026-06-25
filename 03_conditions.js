
// if
let age = 20;

if (age > 18) {
    console.log("Eligible");
}


// if else 
let age = 20;

if (age > 18){
    console.log("Can vote");
}
else {
    console.log("Cannot Vote");
}


// nexted if
let age = 16;
let country = "USA";
let text = "You can drive";

if (country == "USA") {
    if (age >= 16) {
        console.log("You can drive!");
        
    }
}


// nexted if
let age = 16;
let country = "USA";
let text = "You cannot drive";

if (country === "USA" && age >= 16) {
    text = "You can drive!";
}

console.log(text);


// else if
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// else if
let text;
if (Math.random() < 0.5) {
    console.log("Manoj");
} else {
    console.log("Kumar");
}


// ternary operator
let age = 100;
let text = (age < 18) ? "Minor" : "Adult";
console.log(text);


// ternary operator
let isMember = true;
let discount = isMember ? 0.2 : 0;
console.log(discount);


// switch case statement
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


// switch case
// getDay() method returns the weekday as a number between 0 and 6
let text;
switch (new Date().getDay()) {
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Looking forward to the Weekend");
}


// switch case
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
