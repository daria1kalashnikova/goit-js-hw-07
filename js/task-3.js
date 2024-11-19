const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const readyName = inputName.value.trim();
  spanName.textContent = readyName === '' ? 'Anonymous' : readyName;
});
