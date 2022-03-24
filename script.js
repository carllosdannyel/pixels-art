/* eslint-disable no-param-reassign */
// cria o núcle que é uma section com id color-palette
const father = document.getElementsByTagName('body')[0];
const son = document.createElement('section');
father.appendChild(son);

const button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
father.appendChild(button);

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = 1;
input.max = 7;
input.placeholder = 'Digite um número de 1 à 7';
father.appendChild(input);

const buttonOfInput = document.createElement('button');
buttonOfInput.id = 'generate-board';
buttonOfInput.innerText = 'VQV';
father.appendChild(buttonOfInput);

const sectionFather = document.createElement('section');
sectionFather.id = 'pixel-board';
son.id = 'color-palette';
father.appendChild(sectionFather);

// cria os elementos
function creatElements(element, classes) {
  for (let i = 1; i <= 4; i += 1) {
    const father1 = document.querySelector('section');
    const son4 = document.createElement(element);
    father1.appendChild(son4);
    son4.classList = classes;
  }
}
creatElements('div', 'color');

function gerarCor(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

const divOne = document.getElementsByClassName('color')[0];
divOne.style.backgroundColor = 'black';
const divTwo = document.getElementsByClassName('color')[1];
divTwo.style.backgroundColor = gerarCor();
const divThree = document.getElementsByClassName('color')[2];
divThree.style.backgroundColor = gerarCor();
const divFour = document.getElementsByClassName('color')[3];
divFour.style.backgroundColor = gerarCor();

const selected = document.getElementsByClassName('color')[0];
selected.classList.add('selected');

// cria a paleta de cores
function creatPallet() {
  for (let i = 1; i <= 25; i += 1) {
    const son25 = document.createElement('section');
    son25.classList = 'pixel';
    sectionFather.appendChild(son25);
  }
}
creatPallet();

const two = document.querySelectorAll('div')[1];
const three = document.querySelectorAll('div')[2];
const four = document.querySelectorAll('div')[3];

function handleChangeTech(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
}

selected.addEventListener('click', handleChangeTech);
two.addEventListener('click', handleChangeTech);
three.addEventListener('click', handleChangeTech);
four.addEventListener('click', handleChangeTech);

function pixelsEvents(event) {
  const colorOfElement = document.querySelector('.selected');
  const color = colorOfElement.style.backgroundColor;
  event.target.style.backgroundColor = color;
}

const allPixels = document.querySelectorAll('section')[1].children;
for (let i = 0; i < allPixels.length; i += 1) {
  allPixels[i].addEventListener('click', pixelsEvents);
}

function clear() {
  const resets = document.getElementsByClassName('pixel');
  for (let i = 0; i < resets.length; i += 1) {
    resets[i].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clear);

// function alerts() {
//   const pixels = document.getElementsByClassName('pixel');
//   if (input.value >= 1 && input.value <= 7) {
//     for (let i = 0; i < pixels.length; i += 1) {
//       let square = pixels[i];
//       let value = input.value * 2;
//       square.style.heigth = value.toString() + 'px';
//       square += 'px';
//       square.style.width = (input.value * 2).toString;
//       square += 'px';
//     }
//   } else {
//     alert('Board inválido!');
//   }
// }
// buttonOfInput.addEventListener('click', alerts);
