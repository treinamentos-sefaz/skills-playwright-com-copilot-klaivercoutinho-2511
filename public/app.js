const form = document.getElementById('newsletter-form');
const statusMessage = document.querySelector('[role="status"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  statusMessage.textContent = 'Inscrição confirmada!';
});
