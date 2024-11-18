function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const onBtnClick = event => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
};

btnEl.addEventListener('click', onBtnClick);
