//Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas. Realizar el algoritmo que permita determinar el cobro.

let cuentadecobro = 5000;
let horadeSalida = Number(prompt('Ingresar hora de Salida del estacionamiento:'));
let horadeEntrada = Number(prompt('Ingresar hora de Entrada al estacionamiento:'));

let ValoraPagar = Math.round(horadeSalida - horadeEntrada) * cuentadecobro;

alert('El valor a pagar del estacionamiento es: ' + ValoraPagar);