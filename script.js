const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a powerful programming language.",
    "Practice makes perfect, keep coding!",
    "Typing speed improves with regular practice."
];

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const resultElement = document.getElementById("result");
let startTime, endTime;

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function startTypingTest() {
    inputElement.value = "";
    resultElement.textContent = "";
    sentenceElement.textContent = getRandomSentence();
    inputElement.disabled = false;
    inputElement.focus();
    startTime = new Date().getTime();
}

inputElement.addEventListener("input", () => {
    const typedText = inputElement.value;
    if (typedText === sentenceElement.textContent) {
        endTime = new Date().getTime();
        calculateWPM();
    }
});

function calculateWPM() {
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    const wordsTyped = sentenceElement.textContent.split(" ").length;
    const wpm = Math.round((wordsTyped / timeTaken) * 60);
    resultElement.textContent = `Your speed: ${wpm} WPM`;
    inputElement.disabled = true;
}

document.getElementById("start-btn").addEventListener("click", startTypingTest);
