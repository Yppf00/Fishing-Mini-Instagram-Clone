let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('login');


login.addEventListener('click', () => {
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://62b1d207c7e53744afc1fc67.mockapi.io/user_data', true);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(JSON.stringify({
      username: username.value,
      password: password.value
   }));
   xhr.onload = () => {
      fetch('https://62b1d207c7e53744afc1fc67.mockapi.io/user_data')
         .then(response => response.json())
         .then(data => {
            console.log(data);
         }
         );
   }
})