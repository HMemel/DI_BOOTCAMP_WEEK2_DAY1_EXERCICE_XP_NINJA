// Exercise 1 : Evaluation

5 >= 1; // Prediction : True

0 === 1; // Prediction : False

4 <= 1; // Prediction : False

1 != 1; //Prediction : False

"A" > "B"; // Prediction : False

"B" < "C"; // Prediction : True

"a" > "A"; // Prediction : True

"b" < "A"; // Prediction : False

true === false; // Prediction : False

true != true; // Prediction : False


// Exercise 2 : Ask For Numbers

// Ask the user for a string of numbers separated by commas
let numberComma = prompt("Enter your numbers separated by a comma");
let resultNumber =  numberComma.split(",");

// Console.log the sum of the numbers.
console.log(`The sum of your different numbers is ${resultNumber.reduce(other)}`);
alert(`The sum of your different numbers is ${resultNumber.reduce(other)}`);


// Exercise 3 : Find Nemo

// Ask the user to give you a sentence containing the word “Nemo”
let string1 = "Here is my word string, the word Nemo is included. Now I have to find it"

// Find the word “Nemo”
let array1 = string1.split(' ');
let nemoPosition = array1.indexOf('Nemo');

// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
if (nemoPosition != -1) {
    console.log(`I found Nemo at ${nemoPosition}`);
}
// If you can’t find Nemo, console.log “I can’t find Nemo”.
else {
    console.log("I can't find nemo :" );
}


// Exercise 4 : Boom

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

let num = prompt("Please enter a number");
let boom;

// If the number given is less than 2 : return “boom”
if(num > 2) {
    boom = "b" + "o".repeat(num) + "m";
}
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
else {
    boom = "boom"
}
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
if(num % 2 == 0){
    boom = boom + "!";
}
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
if(num % 5 == 0) {
    boom = boom.toUpperCase();
}
