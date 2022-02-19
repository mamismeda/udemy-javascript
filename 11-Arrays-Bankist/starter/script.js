'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}
    ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; //stw
const createUsernames = function (accs){
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLocaleLowerCase()
    .split(' ')
    .map( name =>  name[0])
    .join('');
  })
 
};
createUsernames(accounts);
console.log(accounts);




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // the same as ...arr >>>
console.log([...arr]);

//splice method
// console.log(arr.splice(2));
arr.splice(-1); // second argument is how much to remove
console.log(arr);

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // mutates array

// concat method
const letters = arr.concat(arr2);
console.log(letters); // does not mutate

//join method
console.log(letters.join('-'));
*/ // simple array methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element
console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);

//new at method
console.log(arr.at(-1));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// first index parameter second current element of array!!!
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdre ${Math.abs(movement)}`);
  }
}

console.log('------FOREACH -----');
// first current element second index third whole array!!!
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdre ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
//2: function(400)
// .... >>>>>>>>>>>>>>>>>>>>>>>>>>^^^^^^^^^
*/

/*
//Map foreach method
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})


const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _,map){
   console.log(`${value}: ${value}`);
})
*/

/*

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function(ages1,ages2){
   const newJulia = dogsJulia.slice(1, -2);
   const bothDogs = newJulia.concat(dogsKate);
 
  bothDogs.forEach(function(el, index){
    if(el < 3){
      console.log(`Dog number ${index + 1} is an adult and is ${el}
      years old`);
    }else {
      console.log(`Dog number ${index + 1} is siill a puppy`);
    }
 })
 
}

checkDogs(dogsJulia, dogsKate);
*/
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){
//    return mov * eurToUsd;
// });
const movemUSD = movements.map(mov => mov * eurToUsd);
console.log(movemUSD);
console.log(movements);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescr = movements.map((mov, i) => 
  // if (mov > 0) {

  `Movement ${i + 1} :  You ${mov > 0 ? 'deposited' : 'withdrew'}
   ${Math.abs(
    mov
  )}`

  //   return `Movement ${i + 1} You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`;
  // }
);

console.log(movementsDescr);
*/
const deposits = movements.filter(function(mov,i,arr){
   return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// const depositsFor = [];
// for(const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);