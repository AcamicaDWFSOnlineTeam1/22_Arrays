let arregloPares = [], arregloImpares = [], arregloNonumerico = [];
let flag = 0;

while (flag !== 1) {
    let item2 = prompt('Escribe un número, para finalizar digita 0 (Cero)');
    if (item2 == '0') {
        flag = 1;
    }
    let item3 = parseInt(item2);
    if (!isNaN(item3)) {
        if (item3 % 2 == 0) {
            arregloPares.push(item3);
        }
        else {
            arregloImpares.push(item3);
        }
    } else {
        arregloNonumerico.push(item2);
    }
    if (flag == 1) {
        arregloPares.pop();
    }

}

alert("El arreglo de números par es: " + arregloPares);
alert("El arreglo de números impar es: " + arregloImpares);
alert("El arreglo de caracteres es: " + arregloNonumerico);

