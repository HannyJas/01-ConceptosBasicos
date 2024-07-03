// Hacer un programa que convierta los grados centígrados (30 grados) a grados Fahrenheit, la fórmula es la siguiente: (C*1.8) +32. Imprimir los resultados en una alerta

// Procedimiento
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 1.8) + 32;
};


let respuesta = Number(prompt("Digite el numero 30:"))
alert(`Grados Celsius: ${respuesta} °C es igual a ${celsiusToFahrenheit(respuesta)} °F`);