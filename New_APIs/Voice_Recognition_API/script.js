document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const statusElement = document.getElementById("status");
    const resultElement = document.getElementById("result");

    // Check for browser support
    if (!('webkitSpeechRecognition' in window)) {
        statusElement.innerText = "Your browser does not support speech recognition.";
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = function() {
        statusElement.innerText = "Listening...";
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        resultElement.innerText = `You said: ${transcript}`;
    };

    recognition.onerror = function(event) {
        statusElement.innerText = `Error occurred: ${event.error}`;
    };

    recognition.onend = function() {
        statusElement.innerText = "Click the button and start speaking...";
    };

    startButton.addEventListener("click", function() {
        recognition.start();
    });
});
