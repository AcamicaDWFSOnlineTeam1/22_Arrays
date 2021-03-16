let arreglo = [];
let arreglo1 = [];
let arreglo2 = [];
let arreglo3 = [];
let cantidadNumerosArreglo = 0;
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let flag = 0;

while (flag !== 1) {
    let item = prompt('Escribe un caracter, para finalizar digita 0 (Cero)');
    if (item == '0') {
        flag = 1;
    }
    arreglo.push(item);
    if (flag == 1) {
        arreglo.pop();
    }
}

cantidadNumerosArreglo = arreglo.length;
alert("El arreglo de caracteres  es: " + arreglo);
alert("La cantidad de caracteres es: " + cantidadNumerosArreglo);

if (cantidadNumerosArreglo % 3 == 2) {
    arreglo.shift();
    arreglo.pop();
} else if (cantidadNumerosArreglo % 3 == 1) {
    arreglo.shift();
}

cantidadNumerosArreglo = arreglo.length;
let tamano = cantidadNumerosArreglo / 3;

alert("El arreglo nuevo de caracteres  es: " + arreglo);
alert("La cantidad de caracteres nuevo es: " + cantidadNumerosArreglo);

if (cantidadNumerosArreglo >= 3) {
    for (cont1 = 0; cont1 < tamano; cont1++) {
        arreglo1.push(arreglo[cont1]);
    }
    for (cont2 = cont1; cont2 < (tamano * 2); cont2++) {
        arreglo2.push(arreglo[cont2]);
    }
    for (cont3 = cont2; cont3 < (tamano * 3); cont3++) {
        arreglo3.push(arreglo[cont3]);
    }

    alert("El arreglo 1 de caracteres  es: " + arreglo1);
    alert("El arreglo 2 de caracteres  es: " + arreglo2);
    alert("El arreglo 3 de caracteres  es: " + arreglo3);
}
else {
    alert("La cantidad de caracteres no fue suficiente para crear 3 arreglos");
}


