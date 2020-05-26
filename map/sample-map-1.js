// Array de números
const numeros = [1, 34, 56, 6, 5, 43, 34, 4];

// Mostrar os números ANTES de executar as functions
console.log(numeros);

// Function para calcular o dobro de um número
function dobrar(num) {
  return num * 2;
}

// Arrow-function para calcular o dobro de um número
const dobrarSimples = n => {
  return n * 2;
};

// Mostrar o resultado DEPOIS de executar a function dobrar()
const resultado = numeros.map(dobrar);
console.log(resultado);

// Mostrar o resultado DEPOIS de executar a Arrow-Function dobrarSimples()
const resultadoSimples = numeros.map(dobrarSimples);
console.log(resultadoSimples);
