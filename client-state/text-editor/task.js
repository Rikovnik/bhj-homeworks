const editor = document.getElementById('editor');
const clearButton = document.querySelector('button');

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.text !== null) {
    editor.value = localStorage.text;
  }

  editor.addEventListener('change', (e) => {
  localStorage.setItem('text', editor.value)
  });
});

clearButton.addEventListener('click', (e) => {
  localStorage.removeItem('text');
  editor.value = null;
});