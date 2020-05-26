// Array de notas
const notas = [5.6, 7.8, 6.5, 8.9, 6.8, 3.4, 9.2];
console.log(notas);

// Define a média para aprovação
const mediaAprovacao = 6.65;
console.log(mediaAprovacao);

// Function que define o critério de aprovação
function notasAprovadas(nota) {
  return nota >= mediaAprovacao;
}

// Mostrar o resultado
const resultado = notas.filter(notasAprovadas);
console.log(resultado);

// Outra maneira de obter o mesmo resultado usando Arrow-function direto
const mesmoResultado = notas.filter(n => {
  return n >= mediaAprovacao;
});
console.log(mesmoResultado);
