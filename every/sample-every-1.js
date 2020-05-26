// Array de amigos e suas idades
const amigos = [
  { nome: "Robertinho", idade: 39 },
  { nome: "Mario", idade: 79 },
  { nome: "Ederson", idade: 21 },
  { nome: "Felipe", idade: 30 },
  { nome: "Milena", idade: 16 }
];
console.log(amigos);

// Retorna False quando pelo menos um teste é falso
const todosMaioresDeIdade = amigos.every(a => a.idade >= 18);
console.log(todosMaioresDeIdade);

// Array de filhos e suas idades
const filhos = [
  { nome: "Lara", idade: 5 },
  { nome: "Lucas", idade: 17 }
];
console.log(filhos);

// Retorna True quando todos os elementos são verdadeiros para o teste
const todosMenores = filhos.every(f => f.idade <= 18);
console.log(todosMenores);
