const lengthFactors = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34,
};

const weightFactors = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  ounce: 28.3495,
  pound: 453.592,
};

function convertLength(value, from, to) {
  return (value * lengthFactors[from]) / lengthFactors[to];
}

function convertWeight(value, from, to) {
  return (value * weightFactors[from]) / weightFactors[to];
}

function convertTemperature(value, from, to) {
  if (from === "Celsius") {
    if (to === "Fahrenheit") return (value * 9) / 5 + 32;
    if (to === "Kelvin") return value + 273.15;
  }
  if (from === "Fahrenheit") {
    if (to === "Celsius") return ((value - 32) * 5) / 9;
    if (to === "Kelvin") return ((value - 32) * 5) / 9 + 273.15;
  }
  if (from === "Kelvin") {
    if (to === "Celsius") return value - 273.15;
    if (to === "Fahrenheit") return ((value - 273.15) * 9) / 5 + 32;
  }
  return value;
}

export { convertLength, convertWeight, convertTemperature };
