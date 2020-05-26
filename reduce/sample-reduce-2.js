// Array de números
const numeros = [110, 220, 330, 440, 550, 660, 770, 880, 990, 1001];
console.log(numeros);

// Arrow-function para calcular a média
const media = (ac, n) => {
  console.log(ac);
  console.log(n);

  // Expressões
  const _total = ac.total + n;
  const _qtd = ac.qtd + 100;

  // Retorna um objeto
  return {
    total: _total,
    qtd: _qtd,
    media: _total / _qtd
  };
};

// Define os valores iniciais para o reduce
const valorInicial = { total: 0, qtd: 0, media: 0 };

// Executa a fuction reduce e calcula a média, retornando um objeto
const valorFinal = numeros.reduce(media, valorInicial);

// Mostra média total
console.log(valorFinal.media);
