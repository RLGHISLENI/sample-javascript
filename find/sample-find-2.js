// Array com uma lista de produtos diversos
const produtos = [
  { codigo: 81, descricao: "Nescau" },
  { codigo: 12, descricao: "Rapadura" },
  { codigo: 21, descricao: "Cebola" },
  { codigo: 15, descricao: "Sal" }
];
console.log(produtos);

// Encontra o objeto contendo a descrição especificada
const produtoEncontrado = produtos.find(p => p.descricao == "Cebola");
console.log(produtoEncontrado);
