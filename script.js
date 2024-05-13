



document.addEventListener("DOMContentLoaded", function() {
  const adverts = document.querySelectorAll('.advert');
  let currentAdvertIndex = 0;

  function showAdvert(index) {
    adverts.forEach(ad => ad.style.display = 'none'); 
    adverts[index].style.display = 'block'; 
  }

  function nextAdvert() {
    currentAdvertIndex++;
    if (currentAdvertIndex >= adverts.length) {
      currentAdvertIndex = 0;
    }
    showAdvert(currentAdvertIndex);
  }

  let advertCycle = setInterval(nextAdvert, 3000); 

  showAdvert(0);
});




//Вікно реєстрації 
const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const fullName = this.querySelector('input[name="fullname"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const password = this.querySelector('input[name="password"]').value;

  if (localStorage.getItem(email)) {
    alert('Користувач з таким email вже існує!');
    return;
  }

  localStorage.setItem(email, JSON.stringify({ fullName, password }));

  alert('Реєстрація успішна!');
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = this.querySelector('input[name="email"]').value;
  const password = this.querySelector('input[name="password"]').value;

  const userData = JSON.parse(localStorage.getItem(email));
  if (!userData || userData.password !== password) {
    alert('Неправильний email або пароль!');
    return;
  }

  document.querySelector('.login').classList.remove('active');
  window.location.href = 'products.html';
});








