// cria o núcle que é uma section com id color-palette
const father = document.getElementsByTagName('body')[0];
const son = document.createElement('section');
father.appendChild(son);
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

// cria a paleta de cores
function creatPallet() {
  for (let i = 1; i <= 25; i += 1) {
    const son25 = document.createElement('section');
    son25.classList = 'pixel';
    sectionFather.appendChild(son25);
  }
}
creatPallet();
