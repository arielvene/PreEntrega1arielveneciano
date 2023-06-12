// Declaración de la función para calcular el promedio
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
    }
    return suma / notas.length;
}

  // Declaración del arreglo para guardar los nombres y apellidos de los alumnos
let alumnos = [];

  // Ciclo for para poner los nombres y apellidos de los alumnos
for (let i = 1; i <= 10; i++) {
    let nombre = prompt("Ingrese el nombre y apellido del alumno " + i);
    alumnos.push(nombre);
}

  // Ciclo for para pedir las notas de los exámenes de cada alumno y mostrar el resultado
for (let i = 0; i < alumnos.length; i++) {
    let notas = [];
    for (let j = 1; j <= 3; j++) {
    let nota = parseFloat(prompt("Ingrese la nota " + j + " del alumno " + alumnos[i]));
    notas.push(nota);
    }
    
    let promedio = calcularPromedio(notas);
    let estado = promedio >= 6 ? "Aprobado" : "Desaprobado";
    
    console.log(alumnos[i] + ": Promedio = " + promedio.toFixed(2) + " - " + estado);
    //utilice algunas cosas que no hemos visto todavia, pero lo hice para quede correcto lo que queria hacer
}

