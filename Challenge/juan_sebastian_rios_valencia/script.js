 // Defino variables
 var frutas = [];
 var fruta;
 let input;
 let cont = 0;


 // Funcion que añade el valor del input en el array
 function mkArray(input) {
     if (input != "salir") {
         frutas[cont] = input;
         console.log(`Posicion en el Array: ${cont}. Contenido en la posicion: ${frutas[cont]}.`);
         cont = cont + 1;
     }
     return frutas;
 }

 //  While para ingresar datos al array
 while (input != "salir") {
     input = prompt("Ingrese una fruta (Para salir ingresa salir)");
     input = input.toLowerCase();
     mkArray(input);
 }
 console.log(frutas);

 // if que reinicia cont para reutilizarlo
 if (cont != 0) {
     cont = 0
         // while para imprimir el Array en el HTML
     while (cont < frutas.length) {
         fruta = frutas[cont];
         document.write("<center>" + (cont + 1) + ". " + fruta.charAt(0).toUpperCase() + fruta.slice(1) + "<br></center>");
         cont = cont + 1;
     }
 }
 document.write('<center><h2>IMPORTANTE: Para reiniciar el algoritmo reiniciar la pagina</h2></center>')