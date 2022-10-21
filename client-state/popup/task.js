const subscribeModal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  if (document.cookie === '') {
    subscribeModal.classList.add('modal_active');
  }
});

closeModal.addEventListener('click', () => {
  subscribeModal.classList.remove('modal_active');
  let date = new Date();
  date.setTime(date.getTime() + (3600 * 1000 * 24));
  document.cookie = 'modalClosed=true; expires=' + date.toUTCString();
});