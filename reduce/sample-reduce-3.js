// Array com uma lista de jogadores e seus gols marcados
const jogadores = [
  { nome: "Pele", gols: 1001 },
  { nome: "Romário", gols: 198 },
  { nome: "Ronaldo Nazario", gols: 234 },
  { nome: "Maradona", gols: 35 },
  { nome: "Renato Gaúcho", gols: 2007 }
];
console.log(jogadores);

// Utilizando o reduce com Arrow-function direta para somar o total de gols de todos os jogadores
const inicioContagem = 0;
const totalGols = jogadores.reduce(
  (anterior, atual) => anterior + atual.gols,
  inicioContagem
);
console.log(totalGols);
