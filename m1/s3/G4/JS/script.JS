et Tombola = document.querySelector('.tombola');
let numbers = document.querySelector('.numbers');



let button = document.querySelector ('.button')
Tombola.append(button)

let casella = document.createElement('div')
let numEstratto = document.createElement('li')


let button = document.createElement ('button')
button.innerText = 'Estrai'
button.classList.add('button-Estrai')
buttonSection.append(button)


for(let x = 1; x< 77; x++){
    let num= document.createElement('div');
    num.classList.add('num');
    num.innerText = x;
    numbers.appendChild(num);
    }


   

