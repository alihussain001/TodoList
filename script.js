// const container = document.querySelector(".container"),
    //   pwFields = document.querySelectorAll(".password"),
    //   login = document.querySelector(".login-link");
function validateForm() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
      alert('Please enter both email and password.');
      return false;
    }

    // Additional validation logic can be added here if needed

    return true;
  }
    

