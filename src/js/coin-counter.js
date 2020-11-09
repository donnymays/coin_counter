
const dimeCounter = (input) => {
  return input / .1;=
};
const nickleCounter = (input) => {
  return input / .05;
};
const pennyCounter = (input) => {
  return input / .01;
};

const quartercount = Math.trunc(quarterCounter)
const updatedNum = input - quartercount*.25

// if total - 25  >= 0  
num % 1 != 0

// 


// if input = no coins left to coint 
// we reached a whole numnber that needs no change 
is input a whole number? 
or is it zero 
if 5 no change! 
if 4.95 we need to figure out change 
4 dollars
4 is whole with change figured out and stop  

translating entire number into change 

4.95 

0 is the goal and then coins are tallied 
if zero we are done here 


const QuarterCounter = (input) => {
  if (input == 0) {
    return input;
  } else {
    const quarters = (Math.trunc(input / 25));
    return QuarterCounter(input-(quarters * 25));
  }
  console.log(QuarterCounter);
}

// quarters = (Math.trunc(input / 25)); 
//         return cCounter(input-(quarters * 25))


//loop for penny
function PennyCounter(input) {
  let coin = 0;
  for (let i = 0; i < input; i++) {
    coin += 100
    }
  return coin;
}

//recursive penny
let PennyRecursive = (coin, input) => {
  if (input === 0) {
    return "end";
  } else {
    console.log(coin)
    console.log(input)
    return input * PennyRecursive(coin, input - coin);
  }
}

const cCounter = (input) => {
  if (input == 0) {
    return "!";
  } else if (input < 5) {
    return `${input} pennie(s) `;
  } else if (input >= 25) {
    return (
      `${Math.trunc(input / 25)} quarter(s) ` +
      cCounter(input - Math.trunc(input / 25) * 25)
    );
  } else if (input >= 10) {
    return (
      `${Math.trunc(input / 10)} dime(s) ` +
      cCounter(input - Math.trunc(input / 10) * 10)
    );
  } else if (input >= 5) {
    return (
      `${Math.trunc(input / 5)} nickel(s) ` +
      cCounter(input - Math.trunc(input / 5) * 5)
    );
  }
};

const cCounter = (input) => {
  if (input == 0) {
    return "!";
  } else if (input < .05) {
    return `${input} pennie(s) `;
  } else if (input >= .25) {
    return (
      `${input / .25} quarter ` +
      cCounter(input - (input / .25) * .25)
    );
  } else if (input >= .10) {
    return (
      `${input / .10} dime ` +
      cCounter(input - (input / .10) * .10)
    );
  } else if (input >= .05) {
    return (
      `${input / .05} nickel ` +
      cCounter(input - (input / .05) * .05)
    );
  }
};

  if (penny(.01) == 0) {
    return input(4.46);
  } else {
    return input * QuarterCounter(input, penny(.01) += 1);
  }
}
output = 446 pennys

PennyCounter(54.76, .05)
output `there are  pennys in this ammount`

//reg loop 
function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
//Recursive
alert( pow(2, 3) ); // 8

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8

const multiplier = (InputToMultiplyBy) => {
  return (numberToMultiply) => {
    return numberToMultiplyBy * numberToMultiply;
  }
}