// Array de amigos
const amigos = [
  { nome: "Robertinho", idade: 39 },
  { nome: "Mario", idade: 79 },
  { nome: "Ederson", idade: 21 },
  { nome: "Romário", idade: 45 },
  { nome: "Felipe", idade: 30 },
  { nome: "Milena", idade: 16 },
  { nome: "Rogério", idade: 54 }
];
console.log(amigos);

// Filtra os amigos com nome contendo "Ro"
const filtrados = amigos.filter(a => a.nome.includes("Ro"));
console.log(filtrados);
