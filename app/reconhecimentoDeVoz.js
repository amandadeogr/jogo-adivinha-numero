const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

const onSpeak = (e) => {
   console.log(e.results[0][0].transcript);
}

recognition.addEventListener('result', onSpeak);