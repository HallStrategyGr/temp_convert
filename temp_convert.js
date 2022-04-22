let givenCelsius = 10;

function convertCelsius(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    let kelvin = celsius + 273.15
    return {fahrenheit, kelvin, celsius}
}
console.log(convertCelsius(givenCelsius));
