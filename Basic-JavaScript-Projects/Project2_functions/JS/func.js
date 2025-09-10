function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let celsius = toCelsius(100);
document.getElementById("demo").innerHTML = celsius;
