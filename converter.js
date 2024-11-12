function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const conversion = document.getElementById('conversion').value;
  let result = '';

  if (isNaN(temperature)) {
    result = '⚠️ Please Enter a Valid Number.';
  } else {
    switch (conversion) {
      case 'c-to-f':
        result = `🌡️ ${temperature}°C is ${(temperature * 9/5 + 32).toFixed(2)}°F`;
        break;
      case 'f-to-c':
        result = `🌡️ ${temperature}°F is ${((temperature - 32) * 5/9).toFixed(2)}°C`;
        break;
      case 'c-to-k':
        result = `🌡️ ${temperature}°C is ${(temperature + 273.15).toFixed(2)}K`;
        break;
      case 'k-to-c':
        result = `🌡️ ${temperature}K is ${(temperature - 273.15).toFixed(2)}°C`;
        break;
      case 'f-to-k':
        result = `🌡️ ${temperature}°F is ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
        break;
      case 'k-to-f':
        result = `🌡️ ${temperature}K is ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
        break;
      default:
        result = 'Invalid conversion selected.';
    }
  }

  document.getElementById('result').innerText = result;
}
