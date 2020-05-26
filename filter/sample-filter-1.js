// Array de notas
const notas = [5.6, 7.8, 6.5, 8.9, 6.8, 3.4, 9.2];
console.log(notas);

// Function que define o critério de aprovação
function notasAprovadas(nota) {
  return nota >= 6.65;
}

// Mostrar o resultado
const resultado = notas.filter(notasAprovadas);
console.log(resultado);
