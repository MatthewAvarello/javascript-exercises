const add = function(num1,num2) {
	return num1 + num2 
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((total,currentitem) => total + currentitem, 0)
};

const multiply = function(arr) {
  return arr.reduce((total,currentitem) => total * currentitem, 1)
};

const power = function(base,exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number == 0){
    return 1
  }
  let total = number
  for(let i = number - 1; i > 0; i--) {
    total = total * i
  }
  return total
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
