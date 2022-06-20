const operation = prompt("Choose an operation: add, minus, multiply, divide or modulus");

let num1 = parseInt(prompt("Enter a number:"));

let num2 = parseInt(prompt("Enter another number:"));

function Calc(){
  if ((Number.isInteger(num1) === false) || (Number.isInteger(num2) === false)){
    console.log("Invalid integer value entered");
  } else {
    if (operation === "add"){
      alert(num1 + num2);
    } else if (operation === "minus"){
      alert(num1 - num2);
    } else if (operation === "multiply"){
      alert(num1 * num2);
    } else if (operation === "divide"){
      alert(num1 / num2);
    } else if (operation === "modulus") {
      alert(num1 % num2);
    } else {
      alert("Wrong math operation entered!");
    }
  }
}

Calc();