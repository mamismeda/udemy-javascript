'use strict';

/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    //ES5 method
    // numPassengers = numPassengers || 1;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}


createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123',undefined, 1000);
*/
/*
const flight = 'LH234';
const jonas = {
    name : 'Jonas Schmedtman',
    passport : 2142131321
}

const checkIn = function (flightNum, passenger) {
   flightNum = 'LH999';
   passenger.name = 'Mr.' + passenger.name;
   if(passenger.passport === 2142131321){
       alert("Checked in")
   }else{
       alert('Wrong passport!');
   }
}
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing ... >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
    person.passport =Math.trunc(Math.random() * 100000000000);

}

newPassport(jonas);
checkIn(flight,jonas);
*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> calback functions
const onewWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase (), ...others].join(' ');
  }

  //Higher-order function
const transformer = function (str,fn) {
    console.log(`Original string : ${str}`);
   console.log(`transformed string ${fn(str)}`);

   console.log(`transformed by : ${fn.name}`);
  }


  transformer('JavaScript is the best !', upperFirstWord);
  transformer('JavaScript is the best !', onewWord);

  //JS uses calbacks all the time
  const high5 = function(){
      console.log('Hi');
  }

  document.body.addEventListener('click',high5);

  ['Jonas', 'Martha', 'Adam'].forEach(high5);
  */

// Opposite of callbacks >>>>>>>>>>>>>>>>>>>>
/*
 const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
 }

 const greeterHey = greet('Hey');
 greeterHey('Jonas');
 greeterHey('Steven');

 greet('Hello')('Jonas');

 //Challenge
const gre = (hi) => (name) => console.log(`${hi} ${name}`);
gre('Hey')('Alex');
*/

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book : function()
    book(flightNum,name){
      console.log(`${name} booked a seat on ${this.airline} flight
      ${this.iataCode} ${flightNum}`);
      this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
    },
   
};

lufthansa.book(239, 'Jonas schmedtman');
lufthansa.book(2635, 'Jonas smith');
console.log(lufthansa);

const eurowings = {
    airline : 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
}

const book = lufthansa.book;
//Does NOT work
// book(23, 'Sarah Wiliams');

// misanishnebeli funqcia >>>>>>>>>>>>>>>>>>>>>>>>>>>>> to this method
//call method>>>>>>>>>

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss ={
    airline : "swiss air lines",
    iataCode : 'LX',
    bookings: [],
}

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

//apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss,flightData);
console.log(swiss);

//same
book.call(swiss, ...flightData);
