// Seleciona o formulário e os campos de entrada
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Adiciona um ouvinte de evento de envio de formulário
form.addEventListener('submit', function(event) {
  // Previne o comportamento padrão do envio do formulário
  event.preventDefault();

  // Verifica se o campo de nome é vazio
  if (nameInput.value === '') {
    // Exibe mensagem de erro para o campo de nome
    const nameError = document.querySelector('#name-error');
    nameError.innerHTML = 'Por favor, informe seu nome.';
    nameError.classList.add('error-message');
  } else {
    // Remove mensagem de erro do campo de nome
    const nameError = document.querySelector('#name-error');
    nameError.innerHTML = '';
    nameError.classList.remove('error-message');
  }

  // Verifica se o campo de email é válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    // Exibe mensagem de erro para o campo de email
    const emailError = document.querySelector('#email-error');
    emailError.innerHTML = 'Por favor, informe um email válido.';
    emailError.classList.add('error-message');
  } else {
    // Remove mensagem de erro do campo de email
    const emailError = document.querySelector('#email-error');
    emailError.innerHTML = '';
    emailError.classList.remove('error-message');
  }

  // Verifica se o campo de senha tem pelo menos 8 caracteres
  if (passwordInput.value.length < 8) {
    // Exibe mensagem de erro para o campo de senha
    const passwordError = document.querySelector('#password-error');
    passwordError.innerHTML = 'A senha deve ter pelo menos 8 caracteres.';
    passwordError.classList.add('error-message');
  } else {
    // Remove mensagem de erro do campo de senha
    const passwordError = document.querySelector('#password-error');
    passwordError.innerHTML = '';
    passwordError.classList.remove('error-message');
  }

  // Se todos os campos são válidos, envia o formulário
  if (nameInput.value !== '' && emailRegex.test(emailInput.value) && passwordInput.value.length >= 8) {
    form.submit();
  }
});
 //hasuhusa//