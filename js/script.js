
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



