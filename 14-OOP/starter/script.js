'use strict';
/*

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this !!!
  //   this.calcAge = function(){
  //       console.log(2037 - this.birthYear);
  //   }
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {};
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// Codding chelleng OOP #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //static method

  static hey() {
    console.log(`hey here `);
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// PersonCl.prototype.greet = function(){
//   console.log(`hey ${this.firstName}`);
// }
jessica.greet();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1. classes are not hoisted
// 2. class are first-class citizens
// 3. classes are executed in strict mode
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

PersonCl.hey();
*/

/*

const PersonProto = {
  calcAge(){
    console.log(2037- this.birthYear);
  },

  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

  }
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge();



// 2 codding chellenge in OOP ES6 method

class CarCl {
   constructor (make, speed) {
  this.make = make;
  this.speed = speed;
};

accelerate() {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

brake() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
}

get speedUS(){
  return this.speed / 1.6;
}

set speedUS(speed){
  this.speed = speed * 1.6;
}
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;

*/

/*

const Person = function(firstName,birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
};

const Student = function(firstName,birthYear,course){
  Person.call(this,firstName,birthYear);
  this.course = course;
}

//Linking prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I stude ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//link the prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/

/*
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce(){
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
}

const martha = new StudentCl('Martha jones', 2012,'computer science');
martha.introduce();
martha.calcAge();
*/

/*
const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },

  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.fullName}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'computer science');
jay.calcAge();

*/


// Public fields
// Private fields
// Public methods
// Private methods
class Account {
  // 1) Public fields(instances)!!!
  locale = navigator.language;
  

  // 2) Private fields(instances)!!!
  #movement = [];
  #pin;


  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //Protected property
    //this._movement = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an acoount, ${owner}`);
  }

  // 3) public methods

  //Public interface
  getMovements(){
    return this.#movement;
  }

  deposit(val){
    this.#movement.push(val);
  }
  withdraw(val){
    this.deposit(-val);
  }

 

  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4) Private methods
  _approveLoan(val){
    return true;
  }

}

const account1 = new Account('Jonas', 'Eur', 1111);
console.log(account1);

// account1._movement.push(250);
// account1._movement.push(-140);
account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
// account1.#approveLoan(10);00
console.log(account1.getMovements());

console.log(account1);
//console.log(account1.pin);

//console.log(account1.#movement);
//console.log(account1.#pin);
//console.log(account1.#approveLoan(1000));
