const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const surnameInput = document.getElementById('surname')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').innerHTML = 'Please enter your name';

    }else{
        document.getElementById('name-error').innerHTML = '';
    }

    if (surnameInput.value.trim() === ''){
        document.getElementById('surname-error').innerHTML = 'Please enter your surname';
    
    }else{
        document.getElementById('surname-error').innerHTML = '';
    }
    if (emailInput.value.trim() === '') {
        document.getElementById('email-error').innerHTML = 'Please enter your email';
      } else if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById('email-error').innerHTML = 'Please enter a valid email address';
      }

      if(messageInput.value.trim() === ''){
        document.getElementById('message-error').innerHTML = 'Please enter a message';
      } else if (messageInput.value.trim().length < 10) {
        document.getElementById('message-error').innerHTML = 'Message must be at least 10 characters long';
      } else if (messageInput.value.trim().length > 500) {
        document.getElementById('message-error').innerHTML = 'Message must be no more than 500 characters long';
      } else {
        document.getElementById('message-error').innerHTML = '';
      }

      if(document.getElementById('name-error').innerHTML= ''   &&
      document.getElementById('surname-error').innerHTML === '' &&
      document.getElementById('email-error').innerHTML === '' &&
      document.getElementById('message-error').innerHTML === ''){
        window.location.href=''
      }
    


})