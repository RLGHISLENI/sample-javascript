// Array de números
const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
console.log(numeros);

// Arrow-function para somar dois valores
const somar = (a, b) => {
  return a + b;
};

// Aplica a function reduce
const resultado = numeros.reduce(somar);

// Mostra a soma todal
console.log(resultado);
