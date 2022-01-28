/*const calcAvarage = (a,b,c) => (a + b + c) / 3;

let dolphinPoints = calcAvarage(85,54,41);
let koalaPoints = calcAvarage (23,34,27);


const checkWinner = function(avgDolphins,avgKoalas){

  if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${dolphinPoints} vs ${koalaPoints}) `);
  }else if (avgKoalas >= 2 * avgDolphins){
      console.log(`Dolphins win (${koalaPoints} vs ${dolphinPoints}) `);
  }else{
      console.log(`no one wins`);
  }

}
checkWinner(dolphinPoints,koalaPoints); */

// second codding challenge ARRAYS  >>>>>>>>>>>>>>>>>>>>>>>>>>

/*

const calcTip = function (bill){
   if (bill >= 50 && bill <=300){
       return bill * 0.15;
   }else{
       return bill * 0.2;
   }
}

console.log(calcTip(100));


let bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),];

let total = [bills[0] + tips [0], bills[1] + tips [1], bills[2] + tips [2]];

console.log(total);

*/

// Third Codding challenge OBJECTS METHODS >>>>>>>>>>>>>>>>>>>>>>

/*
let mark = {
    firstName : "Mark",
    lastName : 'Miller',
    mass : 78,
    height : 1.69,

    calcBmi : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi ;
    }
};



let john = {
    firstName : "John",
    lastName : 'Smith',
    mass : 92,
    height : 1.95,
    
    calcBmi : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi ;
    }
    }

mark.calcBmi();
john.calcBmi();



if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI(${mark.bmi}) is higher then ${john.firstName}'s BMI (${john.bmi})`);
}else if (mark.bmi < john.bmi) {
    console.log(`${john.firstName}'s BMI(${john.bmi}) is higher then ${mark.firstName}'s BMI (${mark.bmi})`);
}else{
    console.log("its a draw ");
}

*/

// 4 CODDING CHALLENGE LOOPS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const calcTip = function (bill){
    if (bill >= 50 && bill <=300){
        return bill * 0.15;
    }else{
        return bill * 0.2;
    }
 }

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];


for(let i = 0; i < bills.length; i ++ ){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}

console.log(bills,tips,total);



const calcAvarage = function(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAvarage(total));
console.log(calcAvarage(tips));