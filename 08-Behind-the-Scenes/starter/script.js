'use strict';

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
calcAge(1991);
