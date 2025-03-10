const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum =sum + arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
  for(let i=0; i<arr.length; i++){
    mul =mul * arr[i];
  }
  return mul;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let sum = 1;
  for(let i = 1; i<n+1; i++){
    sum = sum*i
  }
  return sum
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
