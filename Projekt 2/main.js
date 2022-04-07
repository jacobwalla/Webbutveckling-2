const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const qKontainer = document.getElementById('q-kontainer');
const title = document.querySelector('.title');
const frågaText = document.getElementById('fråga');
const svarsAlt = document.getElementById('svarsAlt');

let blandaFrågor, nuvarigaFrågan;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    nuvarigaFrågan++
    nästaFråga()
});

function startGame() {
    startBtn.classList.add('hidden');
    blandaFrågor = frågor.sort(() => Math.random() - .5)
    nuvarigaFrågan = 0
    qKontainer.classList.remove('hidden');
    title.classList.add('hidden');
    nästaFråga()
}

function nästaFråga() {
    reset()
    visaFråga(blandaFrågor[nuvarigaFrågan]);
}

function visaFråga(fråga) {
    frågaText.innerText = fråga.fråga
    fråga.svar.forEach(svaret => {
        const button = document.createElement('button')
        button.innerText = svaret.text
        button.classList.add('btn')
        if (svaret.correct) {
            button.dataset.correct = svaret.correct
        }
        button.addEventListener('click', väljSvar)
        svarsAlt.appendChild(button)
    });
}

function reset() {
    nextBtn.classList.add('hidden')
    while (svarsAlt.firstChild) {
        svarsAlt.removeChild
            (svarsAlt.firstChild)
    }
}

function väljSvar(e) {
    const valdBtn = e.target
    const correct = valdBtn.dataset.correct
    Array.from(svarsAlt.children).forEach(button => {
        classStatus(button, button.dataset.correct)
    })
    if (blandaFrågor.length > nuvarigaFrågan + 1) {
        nextBtn.classList.remove('hidden')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hidden')
    }
}

function classStatus(element, correct) {
    resetClassStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function resetClassStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const frågor = [
    {
        fråga: '24 + 56 * 4 = ?',
        svar: [
            { text: '248', correct: true },
            { text: '320', correct: false },
            { text: '624', correct: false },
            { text: '84', correct: false }
        ]
    },
    {
        fråga: '54 / 2 + 8 * 4 = ?',
        svar: [
            { text: '140', correct: false },
            { text: '21.6', correct: false },
            { text: '59', correct: true },
            { text: '1.5', correct: false }
        ]
    },
    {
        fråga: '2 * 2 * 4 = ?',
        svar: [
            { text: '12', correct: false },
            { text: '8', correct: false },
            { text: '10', correct: false },
            { text: '16', correct: true }
        ]
    },
    {
        fråga: '24 - 23 * 3 = ?',
        svar: [
            { text: '3', correct: false },
            { text: '1', correct: false },
            { text: '-45', correct: true },
            { text: '0', correct: false }
        ]
    }
];

/* Kalkylator */

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

/* Göm/Visa Kalkylator */
const calcBtn = document.getElementById('calcBtn');
let calcKontainer = document.querySelector('.kalkylator');

calcBtn.addEventListener('click', () =>{
    calcKontainer.classList.toggle('hidden');
});
  