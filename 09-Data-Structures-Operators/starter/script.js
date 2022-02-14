'use strict';

// Data needed for a later exercise
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES 6 method
  openingHours,

  //!!!!!!!!!!

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`order recieved ! ${this.starterMenu[starterIndex]}     and ${this.mainMenu[mainIndex]} will be delivered to ${address} at
     ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

console.log(restaurnt.openingHours.mon);
*/

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests : 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

//Or assignment operator !!!!
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && 'ANONYMOUS';
// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

//restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish : null and undefined (not 0 or '')!!!!!
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/*
console.log( '------OR --------');

// Use ANY data type, return Any data type, short-circuiting>>>>>>>>>
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------AND-------');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

//practical example>>>>>>>>>>>>>>>>>>>>
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
//Destructruing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//SPREAD. because on right side of =
const arr = [1, 2, ...[3, 4]];

//Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3, 4, 2, 6, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives');
restaurant.orderPizza('mushrooms');
*/

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Goncci'];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];
*/

// Join 2 arays or more

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT objects

// const str = 'jonas';
// const letters = [...str, '', 's'];
// console.log(letters);
//real world example
// const ingredients = [prompt("let's make pasta! ingredient 1"),prompt("let's make pasta! ingredient 1"),
// prompt("let's make pasta! ingredient 1")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = {foundIn : 1998, ...restaurant, founder : 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/*
//////////////////////////////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address : 'VIa del sole, 21',
  mainIndex : 2,
  starterIndex : 2,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c} } = openingHours;
console.log(o, c);


*/

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, temp);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Recieve 2 return values from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1

const [players1, players2] = game.players;

//2 
const [gk, ...fieldPlayers] = players1;

//3
const allPlayers = [...players1, ...players2];

//4

const players1Final = [...players1, 'Thiago','Coutinho','Perisic'];

//5

const {odds: {team1, x:draw, team2}} = game;

//6
const printGoals = function (...players) {
  // console.log(`${players.length} goals were scored`);

}
*/
// printGoals('Davies', 'Muller', 'Lewandowski','Kimich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// 7
// team1 < team2 && console.log('team 1 won');
// team1 > team2 && console.log('team 1 won');

// MY TRY>>>>>>>>>>>>>>>>>>>>>
 
// for(const item of game.scored){
//   console.log(`goal 1 : ${item}`);
// }

// let prom = Object.values(game.odds);
// let sum = 0;
// for(const el of prom){
//   console.log(`odd of ${sum + el/ prom.length}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//TEACHERS TRY >>>>>>>>>>>>>>>>>
//1
/*
for (const [i, player] of game.scored.entries())
console.log(`Goal ${i+1} : ${player}`);

//2
 let prom = Object.values(game.odds);
 let sum = 0;
 for(const el of prom){
   console.log(`${sum + el/ prom.length}`);
 }

 //3
 for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
     console.log(`Odd of ${teamStr} ${odd}`);
 }
*/


/*

let players1 = game.players[0];
let players2 = game.players[1];
let gk = players1[0];
let fieldplayers = [
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];

let allPlayers = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
];

let playersFinal = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  'Thiago',
  'Coutinho',
  'Perisic',
];
const team1 = game.odds.team1;
const draw = game.odds.draw;
const team2 = game.odds.team1;

let printGoals = function () {

}
*/

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

// const events = new Set(gameEvents.values());
// events.delete('Yellow card');
// console.log(events);
// console.log(`An event happend, on avarage ${90/gameEvents.length}`);
// for(const item of gameEvents){
//  console.log(`${item}`);
// }

//1
const events =[...new Set(gameEvents.values())];

//2
gameEvents.delete(64);

//3
const time = [...gameEvents.keys()].pop();
console.log(`An event happend,on avarage,every ${time / gameEvents.size }`);

//4

for(const [min,event] of gameEvents){
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half] : ${min}: ${event}`);
}

*/

// Split and Join >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName =['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
   const names = name.split(' ');
   const namesUpper = [];

   for(const n of names){
     namesUpper.push(n[0].toUpperCase() + n.slice(1)); 
    }

   console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis') ;
capitalizeName('jonas schmedtmann') ;


// Padding strings
const message = 'Go to gate 23!'
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));


const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

}

console.log(maskCreditCard(334723483243219));
console.log(maskCreditCard('231321848128382138214'));

//Repeat >>>>>>>>>>>>>>>>>>>>

const message2 = 'Bad waether.... All departures delayed... ';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line`.repeat(n));
  }

  planesInline(5);
  planesInline(2);

/*

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIx capitalization in name >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const passenger ='jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].
toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Compairing email >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';


// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replaceing >>>>>>>>>>>>>>>>>>>>>>>>>>

const priceGB = '288,97 $';
const priceUS = priceGB.replace('$', 'ლ').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to bording door 23. Boarding 23 door';

console.log(announcement.replace('door', ' gates'));
// console.log(announcement.replaceAll('door', ' gates'));

console.log(announcement.replace(/door/g, ' gates'));

//Booleans >>>>>>>>>>>>>>>>>

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A3'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('part of the new airbus family');
}

//Practice exercies

const checkbaggage = function (items) {
   
   const baggage = items.toLowerCase();
   if(baggage.includes('knife') || baggage.includes('gun')){
     console.log('You are Not allowed on board');
   }else{
     console.log('Welcome aboard!');
   }

}


checkbaggage('I have a laptop, Food and a pocket Knife');
checkbaggage('Socks and camera');
checkbaggage('got some snacks and a gun for protection');


/*
STRING METHODS AND EXAMPLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const plane = 'A320';
console.log(plane[0]);

console.log('B737'[0]);

console.log(ariline.length);
console.log('B737'.length);

//string methods >>>>>>>>>>>>>>>>

console.log(ariline.indexOf('r'));
console.log(ariline.lastIndexOf('r'));
console.log(ariline.indexOf('portugal'));

// slice method
console.log(ariline.slice(4));
console.log(ariline.slice(4, 7));

console.log(ariline.slice(0, ariline.indexOf(' ')));
console.log(ariline.slice(ariline.lastIndexOf(' ') + 1));

console.log(ariline.slice(-2));
console.log(ariline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat');
  }else{
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

*/

// codding challenge on strings last

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   // console.log(rows);


//   for(const [i, row] of rows.entries()){
//    const [first, second] = row.toLowerCase().trim().split('_');
//    const output = `${first}${second.replace(second[0], second[0].
//     toUpperCase())}`;
//     console.log(`${output.padEnd(20,)} ${'+'.repeat(i + 1)}`);
  }
})