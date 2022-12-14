const gerarNumeroAleatorio = () => {
   return parseInt(Math.random() * maiorValor + 1);
}

const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

document.querySelector('.menor-valor').innerHTML = menorValor;

document.querySelector('.maior-valor').innerHTML = maiorValor;

console.log(numeroSecreto)