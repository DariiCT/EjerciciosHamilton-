/*
vamos a pedir al usuario que ingrese la antidad de alumnos a los calues les asignará una nota, luego de que ingrese la cantidad de notas de cada alumno, se va a desplegar un menú.
1.- mostrar el promedio de notas
2.- mostrar se la nota es aprobaotoria o reprobar
3.- mostrar si la nota está por sobre o por debajo del promedio del curso (comparar y reutilizar el código)
*/

// hacer primero el algoritmo para saber la estructura de este (una catrastro)

/*
¿Qué es lo que tenemos que hacer? 
1.- definir array
2.- pedir la cantidad de alumno
3.- solicitar las notas de cada alumno
4.- saber cual es la nota aprobatorio
5.- validar la cantidad de notas sea la correcta (limites de notas) y definir notas válidas
6.- hacer una funtion por cada opcion del menú
7.- crear el menú
8.- definir cuando termina el menú 
9.- definir el promedio del curso 
*/

// definir un array 
// cosnt se pone por buena practica // igualmente se usa let pero no es practico // cosnt es para un valor que queda permanentemente 
// lo que esta dentro del array de puede modificar 
// todas las array estan dentro de lo corchetes 

// definimos nuestro array 
console.log("\n NOTAS \n")
const notas = [];

// definimos la nota aprobatoria 

const notaAprobatorias = 4.0;

//cantidad de alumnos
//parseInt -> la palabra pase a ser número
//tambien se puede poner parseInt(promt para escribir esta correcto tambien.
//prompt siempre muestra el texto que esta en parentesis 
//esto es para ingresar la cantidad de alumnos let(cantAlumnos = parseint/prompt)
let cantAlumnos = (parseInt(prompt("Ingresar número de alumnos:  ")));

// FOR -> tiene una variable que itera (realizar accion varias veces) de un numero a otro, mientras sea verdadera
// paseFloat -> es para decimales 
// >= Menor o igual que 
// 0,1,2,3,4 [i] empezara a contar desde el 1 
// i = 1 -> es la cantidad x de números 
// i ++ -> va sumando de uno en uno en la vuelta de la llave {}
// Do while -> para pedir la nota o nos quedarmos con esa nota, hace la sentacia una sola vez, la vuele a repetir, evita repetir for // cuando tiene que pasar al menos una vez 
// while -> tendria que pedir hacer la sentencia y voler a escribir for // para que pasa o no pase
// && -> AND (Y)
// || -> OR (o)
// let notaAlumno = 0; -> eso es para entregarle un valor o una función 
// funcion para tomar numeros decimales -> del 56 al 62

for (let i = 1; i <= cantAlumnos ; i++){
  let notaAlumno=0;
  do{
   notaAlumno = parseFloat(prompt("Ingresar Notas: "+ i +": ")); 
  } while(notaAlumno >7 || notaAlumno <1);
  notas.push(notaAlumno);
}

/*Funciones del menú*/
// los pareametros no se definen // este cumple el mismo roll que f(x) = x + 1
// el i se compare con la cantidad de notas // LENGHT -> te ayudara a recorrer el arreglo de notas 

//declaramos la funcion del menu, se declara con el nombre de primedioNotas y se le entrega un parametro el cual será reemplazado cuando la función sea llamada 
function promedioNotas(arregloNotas){
//declaramos una variable acumuladora llamada suma, la cual estará encargada de guardar la suma toral de todas las notas que nuestro 
  let suma = 0
  for(let i = 0; i < arregloNotas.length; i++){
   suma = suma + arregloNotas[i]; 
  }
   return suma/arregloNotas.length; 
}
//console.log("promedio notas: " + promedioNotas(notas)); -> una prueba 

//vamos a crear una funcion la cual nos muesrtre si la nota esta aprobatoria o reprobatoria

function aprobado(notaAprobatorias, arregloNotas){
  //recorremos todas las notas uan por una 
  for (let i = 0; i < arregloNotas.legth; i++){
    //revisamos si es una nota con la que aprueba o reprueba
    if(arregoNotas[i] > notasAprobatoria){
      //se le muestra al usuario la respuesta segun sea el caso 
      console.log("La nota del alumno: " +(i+1)+" Fue de: "+arregloNotas[i]+",por lo que aprueba")
    } else{
      console.log("La nota del alumno: " +(i+1)+" Fue de: "+arregloNotas[i]+",por lo que reprueba")
    }
  }
}

//funcion que nos va a decir si la nota esta por debajo o por sobre el promedio

function sobrePromedio(arregloNotas, promedioNotas){
  //recurremos todas las notas una por una 
  for (let i = 0; i < arregloNotas.legth; i++){
    //verificamos si esta por sobre o por debajo del promerio 
    if(arregloNotas[i] >= promedioNOtas){
      //se le dice al usuario si la nota del alumno esta por sobre o por debajo del promedio segun sea el caso
      console.log("la nota del alumno "+(i+1)+" Fue de: "+arregloNotas[i]+", la cual está por sobre el promedio del curso que fue de: " +promedioNotas)
      } else if (arregloNotas[i] == promedioNotas){
      conole.log("La nota del alumno "+(i+1)+"fue de: "+arrregloNotas[i]+", la cual es igual al pomerdio del curso, que fue de: "+promedioNotas);
     } else{
        console.log("la nota del alumno "+(i+1)+" Fue de: "+arregloNotas[i]+", la cual está por debajo el promedio del curso que fue de: " +promedioNotas)
    }
  }
}


console.log("\n COMIENZO DE MANÚ \n")
//definimos la variable que va a guardar la opción del usuario 
let opcion = 1
// while es para que no ejecute nada, si esta mal (entra una vez)
while (opcion != 0){
  // do while es para darle algun tipo de dato (entra más veces)
  do{
  // dibujamos el menú

  console.log("Bienvenido/a");
  console.log("Seleccione 1 si quiere obtener el promedio de las notas.");
  console.log("Seleccione 2 si quiere ver si la nota es aprobada o reprobatoria");
  console.log("Seleccione 3 para ver si la nota esta sobre o por debajo de promedio");
  console.log("Selecciones 0 para salir del menú");
      console.log("\n    \n")
  opcion = parseInt(prompt("Ingrese opción: "));
  

console.log("\n RESULTADOS \n")
  } while(opcion < 0 || opcion >3);
    //revisamos que opcion ingreso el usuario y segun eso mostramos la funcion correspondiente
  if(opcion == 1){
      console.log("El promedio de notas fue: " + promedioNotas(notas));
      console.log("\n    \n")
    } else if (opcion == 2) {
      aprobado(notaAprobatorias, notas);
    } else if (opcion == 3) {
      let promedio = promedioNotas(notas);
      sobrePromedio(notas, promedio);
    } else {
      console.log("hasta luego :D")
  }
}