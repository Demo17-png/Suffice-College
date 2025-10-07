 function showRegister() {
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
}

function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
}

function register() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const regMsg = document.getElementById('regMsg');

  if (username === "" || password === "") {
    regMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (localStorage.getItem(username)) {
    regMsg.textContent = "User already exists.";
  } else {
    localStorage.setItem(username, password);
    regMsg.style.color = "green";
    regMsg.textContent = "Registration successful! You can login now.";
  }
}

function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const loginMsg = document.getElementById('loginMsg');

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    loginMsg.style.color = "green";
    loginMsg.textContent = "Login successful! 🎉";

    // Dynamic redirection based on username
    if (username === "adenrelejoshua") {
      setTimeout(() => {
        window.location.href = "adenrelejoshua.html";
      }, 1000);
    } else if (username === "shadeadeyemi") {
      setTimeout(() => {
        window.location.href = "shadeadeyemi.html";
      }, 1000);
    } else if (username === "matthewdaramola") {
      setTimeout(() => {
        window.location.href = "matthewdaramola.html";
      }, 1000);
      } else if (username === "tinanwankwo") {
      setTimeout(() => {
        window.location.href = "tinanwankwo.html";
      }, 1000);
      // Handle other users, if any, or just show the success message without redirection
      // For this case, we will not redirect if the user is not one of the above
  } else {
    loginMsg.style.color = "red";
    loginMsg.textContent = "Invalid username or password.";
  }
}

// Add the logout function
function logout() {
  localStorage.clear(); // Clear all data from localStorage
  window.location.replace("index.html"); // Redirect to the login page and replace history entry
}
}
