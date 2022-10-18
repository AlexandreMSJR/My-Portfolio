// Effect to typing

const typing = document.querySelector(".text");

const messages = ["Sou o Alexandre Medeiros    ", "Desenvolvedor em evolução    ", "Estou estudando TypeScript (Ts),   ", "JavaScript(Js), NodeJs, SQL, HTML5 e CSS3.    "];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacter = '';

const type = () => {

    shouldBeTheSame = messageIndex === messages.length;

    if (shouldBeTheSame) {
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacter = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacter

    shouldBeTyped = currentCharacter.length === currentMessage.length;
    if (shouldBeTyped) {
        messageIndex++;
        characterIndex = 0
    }
}

setInterval(type, 150)

// Dark-mode button

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})