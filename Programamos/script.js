// Código visto en clase
/* let valores = ['Mexico', 32, 'Carro', 4, '3', 'Casa', 100, 1];
let index = 0;
let numeros = [];
let noNumeros = [];
let suma = 0;

while (index < valores.length) {

    if (isNaN(valores[index])) {
        noNumeros.push(valores[index]);
    } else {
        //numeros.push(valores[index]);
        suma = suma + valores[index];
    }

    index += 1;
}

console.log("La suma es: " + suma);
console.log("El arrglo de no numéricos es: " + noNumeros);


function sumaArray(valores, index) {
    let suma = 0;
    if ( !isNaN(valores[index]) ) {
        suma = suma + parseFloat(valores[index]) ;
    }
    return suma;
} */


// Solución 1
const data = ["auto", "1", 5, "rojo", "verde", 5, 11, "casa", '2'];
let noNumbers = [];
let sum = 0;
let index = 0;
const NUMBER = "number";

while (index < data.length) {
    if (typeof (data[index]) === NUMBER) {
        sum = sum + data[index]; // suma += data[index]
    } else {
        noNumbers.push(data[index]);
    }
    index += 1;
}

console.info("La suma es:" + sum);
console.warn("Datos no númericos: " + noNumbers);

// Solución 2 - arrow functions
suma = 0;
noNumbers = [];
data.forEach(x => typeof (x) === "number" ? suma += x : noNumbers.push(x));

console.log("La otra suma es: " + suma);
console.error("Lo otros no numéricos son: " + noNumbers);