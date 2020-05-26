// Array de times de futebol
const times = [
  { clube: "Grêmio", campeao: true },
  { clube: "Inter", campeao: false },
  { clube: "Palmeiras", campeao: false },
  { clube: "Flamengo", campeao: true }
];
console.log(times);

// Retorna True quando pelo menos um teste é verdadeiro
const algumCampeao = times.some(t => t.campeao);
console.log(algumCampeao);
