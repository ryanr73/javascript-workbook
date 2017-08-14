'use strict'

// 1. for loop
const carsInReverse = ['Ford', 'Chevy', 'BMW', 'Toyota', 'Ferarri', 'Jaguar', 'Tesla', 'Honda']
for (let i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
};

// 2. for...in loop
const persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female',
};
for (let key in persons) {
  console.log(key);
}
for (let key in persons) {
  if (persons[key] === persons.birthDate) {
    console.log(persons[key]);
  }
}

//3 while loop
let i = 0;
while (i < 1001) {
  console.log(i);
  i++;
}

//4 do...while loop
let num = 0;
do {
  console.log(num);
  num ++;
} while (num <1001);

//5 When is a for loop better than a while loop?
// A for loop repeats until a specified condition evaluates to false.
// A while statement executes its statements as long as a specified condition evaluates to true.
//It is generally better to us e afor loop on most occasions because the for loop allows us to know the number of iterations and allows us to increment as well. A while loop only works when the condition of the statement evaluates to true.

// How is the readability of the code affected?
// Allows for simpler code.

//6 What is the difference between a for loop and a for...in loop?
// for loops, loop through a block of code a number of times until until a specified condition evaluates to false.
// The for...in statement iterates a specified variable over all the enumerable properties of an object.

//7 What is the difference between a while loop and a do...while loop?
// For loops through a block of code a number of times, whereas the do... while loop loops through a block of code while a specified condition is true
