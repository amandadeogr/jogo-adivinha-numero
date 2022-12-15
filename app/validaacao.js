const verificaSeOValorEValido = (chute) => {
   const numero = parseInt(chute);

   if(chuteForInvalido(numero)) {
      containerChute.innerHTML += '<div>Valor inválido: O valor secreto precisa ser um número.</div>';
      return
   }

   if(valorForMaiorOuMenorDoQueOPermitido(numero)){
      containerChute.innerHTML += `
      <div>
      Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}.
      </div>
      `
      return
   }

   if(numero === numeroSecreto){
      document.body.innerHTML = `
         <h2>Você acertou!</h2>
         <h3>O número secreto era: ${numeroSecreto}</h3>
         <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
      `
      return
   } else if(numero > numeroSecreto) {
      containerChute.innerHTML += `
         <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
      `
   } else {
      containerChute.innerHTML += `
         <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
      `
   }
}

const chuteForInvalido = (numero) => {
   return Number.isNaN(numero);
}

const valorForMaiorOuMenorDoQueOPermitido = (numero) => {
   return numero < menorValor || numero > maiorValor
}

document.body.addEventListener('click', e => {
   if(e.target.id == 'jogar-novamente'){
      window.location.reload();
   }
})