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

let age = 18;
const ageDrink = 18; 

if (ageDrink){
    console.log(`Chug, Chug, Chug`);
} else {
    console.log(`I'm sorry, but I'm afraid I'm going to have to ask you to leave.`);
}
// FUNCTION TYPES
// ANONYMOUS FUNCTIONS
function() {
    return 'hello'
} 
// These are usually asigned to a variable as function expressions

// CALLBACK FUNCTION
setTimeout(function(){
    return 'hello'
}, 1000)
// Pass into other functions as a parameter - which is an anonymous function too.


// NAMED FUNCTIONS
function sayHello() {
    return{}
}
function Person(n){
    this.name = n
}



// ARROW FUNCTIONS
let arro = birthYear => 2023 - birthYear; 
let aro2 = (birthYear, currentYear) => birthYear - currentYear;f

const ireland = "Ireland";
const continent = "Europe";
let IrlPop = 6;
let globePop = 7900;
const isIsland = true;
const language = "Irish";
const finland = 6;




let percentagePopulation = function(population, globePop){
    return globePop / population * 100;
}


let describePopulation = function (country, population, globePop){
    let percentPop = percentagePopulation(population, globePop);
    return `${country} has ${population} which is about ${percentPop} of the world`;
}

console.log(describePopulation(ireland, IrlPop, globePop));

//ARRAYS --------------------------------------------------------/

//Literal Syntax
const friends = ["Mike", "James", "Paul"];
console.log(friends);
console.log(friends[friends.length-1])

const years = new Array(1991, 1984, 2008, 2028);

const calcAge = function(birthYears) {
    const d = new Date();
    let year = d.getFullYear();
    return year - birthYears;
}

const birthYears = [1991, 1979, 1976];

console.log(calcAge(years[1]));

//ARRAY Coding Challenge ------------------------------------/

let calcTip = function(billVal) {
    if(billVal >= 50 && billVal <= 300){
        return (billVal / 100) * 15;
    } else {
        return (billVal / 100) * 20;
    };
};

const bills = [125, 55, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);