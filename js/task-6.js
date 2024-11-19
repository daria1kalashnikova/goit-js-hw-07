function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  boxes.innerHTML = '';

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    size += 10;

    elements.push(div);
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
