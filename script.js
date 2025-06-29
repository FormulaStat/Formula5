// Mobile Menu Toggle

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
  });
}

// Register Form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Registration successful! Redirecting to login...');
    window.location.href = 'login.html';
  });
}

// Transfer Form
const transferForm = document.getElementById('transferForm');
if (transferForm) {
  transferForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Transfer submitted successfully!');
    transferForm.reset();
  });
}

// Settings Form
const settingsForm = document.getElementById('settingsForm');
if (settingsForm) {
  settingsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Settings updated successfully!');
    settingsForm.reset();
  });
}
