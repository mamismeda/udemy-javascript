'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'
    //   output = 'NEW OUTPUT';
      const str = `oh , and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    
    }
    // console.log(str)
    console.log(millenial);
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'jonas';
calcAge(1991);*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*

//variables

console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(undefined);
if(!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard(){
  console.log("all products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x=== window.x);
console.log(y=== window.y);
console.log(z=== window.z);
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before marriage', jessica);
console.log('after marriage', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');

console.log('before marriage', jessica2);
console.log('after marriage', jessicaCopy);