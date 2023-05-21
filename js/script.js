"use strict";
/*
const bmi = function (weight, tall){
    return weight / tall*2;
};

let mark = {
    weight: 78,
    tall: 1.69
};

let john = {
    weight: 92,
    tall: 1.95
};

const markBMI = bmi(mark.weight, mark.tall);
const johnBMI = bmi(john.weight, john.tall);

  
let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI ? `Mark is fatter!` : `John is fatter!`);

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}


const avgEdit = (param1, param2, param3) => param1 + param2 + param3 / 3;

const gameOne = {
    d: 96,
    k: 88,
};



const gameTwo = {
    d: 108,
    k: 91,
};

const gameThree = {
    d: 89,
    k: 110,
}


let avgDolphin = avgEdit(gameOne.d, gameTwo.d, gameThree.d);
let avgKoala = avgEdit(gameOne.k, gameTwo.k, gameThree.k);

if (avgDolphin > 100 && avgDolphin > avgKoala){
    console.log(`Winner Dolphins`);
} else if(avgDolphin > 100 && avgDolphin === avgKoala){
    console.log(`It's a draw`)
}


const bill = 275;
const tip = function(bill) {
    if (bill >= 50 && bill <= 300 ) {
        return bill/100;
    } else {
        return bill/100;
    }
} 

console.log(`The bill was ${bill}, and the tip was ${tip(bill)}, and the total value ${bill + tip(bill)}`);



let country = 'Portugal'; 
let continent = 'Europe'; 
let population = 10;
let isIsland = false;
let language = "Portuguese";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

if(population > 10){
    console.log(`Big country`);
} else{
    console.log(`Small Country`);
}

console.log(5 * '9');
console.log(5 == '5');
console.log(5 === '5');
console.log(5+"5");
console.log(5/"5");
console.log(20%"3");
console.log(5*(20/4));
console.log("123" > 57);


const numNeighbours = prompt(
    'How many neighbour countries does your country have?',
);

if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  }

switch (language) {
    case 'Irish':
        console.log(`No`);
        break;
    case 'Portuguese':
        console.log(`Yes Portuguese the the lang`);
        break;
        default:
        console.log(`I don't know`);
}

  if (language === 'English' && population < 50 && !isIsland)
{
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
    'below'} average`,
  );
  */


let describeCountry = function (country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

const descIreland = describeCountry("Ireland", 6, "Dublin");
const descEngland = describeCountry("England", 36, "London");
console.log(descIreland);
console.log(descEngland);
console.log(describeCountry("Italy", 45, "Rome"));

// Function Declaration
function percentageOfWorld1(population){
    return (population / 7900) * 100;
};

//Function Expression
const percentageOfWorld2 = function (population) { 
    return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10); 
const percChina1 = percentageOfWorld1(1441); 
const percUSA1 = percentageOfWorld1(332); 
console.log(percPortugal1, percChina1, percUSA1);

const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10); 
const percChina3 = percentageOfWorld3(1441); 
const percUSA3 = percentageOfWorld3(332); 
console.log(percPortugal3, percChina3, percUSA3);