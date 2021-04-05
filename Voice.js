// https://www.google.com/search?q=
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Speak   : ")
}

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    result.append('You said : ' + text)
    setTimeout(function () {
        window.open('https://www.google.com/search?q=' + text);
    }, 800)
}