// Array com números repetidos
const numerosRepetidos = [1, 2, 3, 98, 7, 6, 5, 4, 32, 4, 54, 6, 7, 2, 1, 3];
console.log(numerosRepetidos);

// Retornar um array sem os números repetidos usando Arrow-function direto
const numerosUnicos = numerosRepetidos.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);
console.log(numerosUnicos);
