// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
    cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  //este tambien anda
  // let suma = 0;
  // for (let i = 0; i < numeros.length; i++) {
  //   suma += numeros[i];
  // }
  // cb(suma)   
  let suma = numeros.reduce(function(acumulador,actual){//se suele usar acc ahi se guardan los datos y curr el otro, el actual
    return acumulador + actual;
  });
  cb(suma)
}
  

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:  
  // for(i = 0; i < array.length; i ++){
  //   cb(array[i]);
  // }

//array.forEach(cb); este tambien funciona
array.forEach(function(element){
  cb(element);
})
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //return array.map(cb) //este tambien anda
  //resultado es un nuevo array
   var resultado = array.map(function(e){
     return cb(e)
   })
   return resultado;  
}
// function sumar1(n){
//   return n + 1             //esto es un ejemplo
// }
// console.log(map([1,2,3,4], sumar1)) da 2,3,4,5 si el array es 1,2,3,4


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  // var nuevoArray = [];
  // for (let i = 0; i< array.length; i++){
  //   if (array[i][0] === "a"){             // este codigo anda
  //     nuevoArray.push(array[i])
  //   }
  // }
  // return nuevoArray;
  var resultado = array.filter(function(palabra){
    return palabra[0] === "a"
  })
  return resultado
  //console.log(filter(["ala","pelota","avion"])); //esto imprime ["ala","avion"]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
