// Array de pizzas
const pizzas = [
  "margarita",
  "quatro-queijos",
  "calabresa",
  "bacon",
  "california",
  "mussarela"
];
console.log(pizzas);

// Utiliza o find para encontrar a primeira pizza que começa com a letra C
// A function find retorna o primeiro elemento encontrado
const qualComecaComLetraC = pizzas.find(p => p.startsWith("c"));
console.log(qualComecaComLetraC);
