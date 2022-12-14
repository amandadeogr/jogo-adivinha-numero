const conatinerChute = document.querySelector('#chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

const onSpeak = (e) => {
   chute = e.results[0][0].transcript;
   exibeChuteNaTela(chute);
}

const exibeChuteNaTela = () => {
   conatinerChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
   `
}

recognition.addEventListener('result', onSpeak);