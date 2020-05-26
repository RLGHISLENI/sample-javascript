// Array de produtos
const produtos = [
  { descricao: "Chocolate", preco: 2.59, desconto: 10 },
  { descricao: "Coca-Cola", preco: 6.9, desconto: 5 },
  { descricao: "Sorvete", preco: 24.5, desconto: 20 },
  { descricao: "Pastelina", preco: 6.4, desconto: 7.5 }
];

// Mostrar os produtos ANTES de executar as functions
console.log(produtos);

// Function para calcular o preço dos produtos com desconto
function descontoProduto(produto) {
  const desconto = (produto.preco * produto.desconto) / 100;
  return parseFloat(produto.preco - desconto).toFixed(2);
}

// Arrow-function para calcular o preço dos produtos com desconto
const descontoProdutoSimples = p => {
  return p.preco - (p.preco * p.desconto) / 100;
};

// Mostrar o resultado DEPOIS de executar a function descontoProduto()
const precosComDesconto = produtos.map(descontoProduto);
console.log(precosComDesconto);

// Mostrar o resultado DEPOIS de executar a Arrow-Function descontoProdutoSimples()
const precosSimples = produtos.map(descontoProdutoSimples);
console.log(precosSimples);

// Arrow-function para calcular o custo final do produto com desconto
const obterCusto = precoComDesconto => {
  return parseFloat(precoComDesconto * 0.34);
};

// Execução da function map mais de uma vez (primeiro calcula o desconto e depois obtem o custo final)
const custoFinal = produtos.map(descontoProdutoSimples).map(obterCusto);
console.log(custoFinal);

// Outra maneira de realizar esta operção usando Arrow-function direto
// Menos verboso e mais expressivo - Utilizado somente para funcões pequenas
const custoFinalDireto = produtos
  .map(p => p.preco - (p.preco * p.desconto) / 100)
  .map(c => c * 0.34);
