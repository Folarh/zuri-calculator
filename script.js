const operation = prompt("Choose an operation: add, minus, multiply, divide or modulus");

let num1 = parseInt(prompt("Enter a number:"));

let num2 = parseInt(prompt("Enter another number:"));

function Calc(){
  if ((Number.isInteger(num1) === false) || (Number.isInteger(num2) === false)){
    console.log("Invalid integer value entered");
  } else {
    if (operation === "add"){
      console.log(num1 + num2);
    } else if (operation === "minus"){
      console.log(num1 - num2);
    } else if (operation === "multiply"){
      console.log(num1 * num2);
    } else if (operation === "divide"){
      console.log(num1 / num2);
    } else if (operation === "modulus") {
      console.log(num1 % num2);
    } else {
      console.log("Wrong math operation entered!");
    }
  }
}

Calc();