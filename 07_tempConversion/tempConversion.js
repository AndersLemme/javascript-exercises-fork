const convertToCelsius = function(f) {
  let c = ((f-32)/(9/5))
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let f = (c/(5/9)+32)
  f = Math.round(f*10)/10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
