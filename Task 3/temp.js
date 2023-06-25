function convertTemperature() {
  var temperatureInput = document.getElementById('temperatureInput').value;
  var unitSelect = document.getElementById('unitSelect').value;
  var convertedTemperature;
  var convertedUnit;

  if (unitSelect === 'celsius') {
    convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
    convertedUnit = '°F';
  } else if (unitSelect === 'fahrenheit') {
    convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
    convertedUnit = '°C';
  } else if (unitSelect === 'kelvin') {
    convertedTemperature = parseFloat(temperatureInput) - 273.15;
    convertedUnit = '°C';
  }

  document.getElementById('result').textContent = 'Converted Temperature: ' + convertedTemperature.toFixed(2) + convertedUnit;
}
