// Array de temperaturas em Fahrenheit
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
console.log(fahrenheit);

// Usando Function
function converterParaCelcius(g) {
  return Math.round(((g - 32) * 5) / 9);
}
console.log(fahrenheit.map(converterParaCelcius));

// Usando Arrow-function
const convertido = fahrenheit.map(g => {
  Math.round(((g - 32) * 5) / 9);
});

// Conversão para Graus Célcius usando Arrow-function direto
const celcius = fahrenheit.map(g => Math.round(((g - 32) * 5) / 9));
console.log(celcius);
