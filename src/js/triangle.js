const cCounter = (input) => {
  if (input == 0) {
    return "!";
  } else if (input < 5) {
    return `${input} pennies `;
  } else if (input >= 25) {
    return (
      `${Math.trunc(input / 10)} quarters ` +
      cCounter(input - Math.trunc(input / 25) * 25)
    );
  } else if (input >= 10) {
    return (
      `${Math.trunc(input / 10)} dimes ` +
      cCounter(input - Math.trunc(input / 10) * 10)
    );
  } else if (input >= 5) {
    return (
      `${Math.trunc(input / 5)} nickels ` +
      cCounter(input - Math.trunc(input / 5) * 5)
    );
  }
};
