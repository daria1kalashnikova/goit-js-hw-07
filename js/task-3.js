const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  const name = inputName.value;
  const readyName = name.trim();

  if (spanName.textContent === '') {
    spanName.textContent = 'Anonymous';
  } else spanName.textContent = readyName;
});
