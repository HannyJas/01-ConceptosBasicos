//Realizar el mismo programa del Ejercicio #2, pero ahora se debe pedir el dato inicial (grados centígrados) al usuario (teclear el dato).

const centigradosToFahrenheit = (centigrados) => {
    return (centigrados * 1.8) + 32;
};


let respuesta = Number(prompt("Digite un numero:"))
alert(`Grados Centigrados: ${respuesta} °C es igual a ${centigradosToFahrenheit(respuesta)} °F`);