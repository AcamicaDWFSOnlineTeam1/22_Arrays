// Código visto en clase
let valores = ['Mexico', 32, 'Carro', 4, '3', 'Casa', 100, 1];
let index = 0;
let noNumeros = [];
let suma = 0;

while (index < valores.length) {

    if (typeof (valores[index]) === 'number') {
        suma = suma + valores[index];
    } else {
        noNumeros.push(valores[index]);
    }

    index += 1;
}

console.log("La suma es: " + suma);
console.log("El arrglo de no numéricos es: " + noNumeros);

