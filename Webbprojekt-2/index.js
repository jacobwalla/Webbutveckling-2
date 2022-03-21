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

let calcBtn = document.getElementById('calcBtn');
let calcKontainer = document.querySelector('.kalkylator');

calcBtn.addEventListener('click', () =>{
    if(calcKontainer.style.display === 'none'){
        calcKontainer.style.display = 'block';
    }else {
        calcKontainer.style.display = 'none';
    }
});