// Array de produtos
const produtos = [
  { descricao: "Chocolate", preco: 2.59, desconto: 10 },
  { descricao: "Coca-Cola", preco: 6.9, desconto: 5 },
  { descricao: "Sorvete", preco: 24.5, desconto: 20 },
  { descricao: "Pastelina", preco: 6.4, desconto: 7.5 }
];
console.log(produtos);

// Arrow-function para calcular o preço dos produtos com desconto
const descontoProduto = p => {
  return p.preco - (p.preco * p.desconto) / 100;
};

// Arrow-function com critério de filtro para descontos acima de 10%
const maioresDesconto = p => {
  return p.desconto >= 10;
};

// Mostrar o resultado DEPOIS de executar o filtro a function descontoProduto()
const precosComMaioresDesconto = produtos
  .filter(maioresDesconto)
  .map(descontoProduto);
console.log(precosComMaioresDesconto);
