const containerChute = document.querySelector('#chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

const onSpeak = (e) => {
   chute = e.results[0][0].transcript;
   exibeChuteNaTela(chute);
   verificaSeOValorEValido(chute)
}

const exibeChuteNaTela = () => {
   containerChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
   `
}

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());