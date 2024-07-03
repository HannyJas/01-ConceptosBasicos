//Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora.

console.log(nombre)
let nombre = prompt('Ingresa nombre');
let horasTrabajadas = Number(prompt('Ingresa las horas trabajadas'));
let valordelaHora = Number(prompt('Ingresa valor de la hora'));

let ValorSueldo = horasTrabajadas * valordelaHora;

alert(`El valor del sueldo de ${nombre} es: `+ ValorSueldo);
