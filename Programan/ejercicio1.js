
let arregloNumerico = [];
let flag = 0;

while (flag !== 1) {
    let item2 = prompt('Escribe un número, para finalizar digita STOP');
    if (item2 == 'Stop') {
        flag = 1;
    }
    item2 = parseInt(item2);
    if (!isNaN(item2)) {
        arregloNumerico.push(item2);
    }
}

alert("El arreglo de números es: " + arregloNumerico);

