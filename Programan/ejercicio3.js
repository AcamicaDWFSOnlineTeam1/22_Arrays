
let arregloNumerico = [];
let cantidadNumerosArreglo = 0;
let mayor = 0;
let menor = 0;
let flag = 0;

while (flag !== 1) {
    let item = prompt('Escribe un número, para finalizar digita 0 (Cero)');
    if (item == '0') {
        flag = 1;
    }
    let item2 = parseInt(item);
    if (!isNaN(item2)) {
        arregloNumerico.push(item2);
    } else {
        alert('Debe ser un número');
    }
    if (flag == 1) {
        arregloNumerico.pop();
    }

}

cantidadNumerosArreglo = arregloNumerico.length;
alert("El arreglo de números  es: " + arregloNumerico);
alert("La cantidad de números es: " + cantidadNumerosArreglo);


for (let f = 0; f < arregloNumerico.length; f++) {
    if (arregloNumerico[f] > mayor) {
        mayor = arregloNumerico[f];
    }
}

alert("El número mayor es: " + mayor);

menor = mayor;


for (let f = 0; f < arregloNumerico.length; f++) {
    if (arregloNumerico[f] < menor) {
        menor = arregloNumerico[f];
    }
}

alert("El número menor  es: " + menor);




