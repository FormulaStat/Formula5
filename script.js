console.log('✅ script.js loaded');

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const API_URL = "https://trading-figures.com/api";

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const response = await fetch(`${API_URL}/login.php`, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert('✅ Login successful!');
      localStorage.setItem('user', JSON.stringify(result.user)); // Optional
      window.location.href = 'dashboard.html';
    } else {
      alert('❌ Login failed: ' + result.message);
    }
  });
}

// Register Form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(registerForm);
    const response = await fetch(`${API_URL}/register.php`, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert('✅ Registration successful!');
      window.location.href = 'login.html';
    } else {
      alert('❌ Registration failed: ' + result.message);
    }
  });
}

// Transfer Form
const transferForm = document.getElementById('transferForm');
if (transferForm) {
  transferForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(transferForm);
    const response = await fetch(`${API_URL}/transfer.php`, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert('✅ Transfer submitted successfully!');
      transferForm.reset();
    } else {
      alert('❌ Transfer failed: ' + result.message);
    }
  });
}

// Settings Form
const settingsForm = document.getElementById('settingsForm');
if (settingsForm) {
  settingsForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(settingsForm);
    const response = await fetch(`${API_URL}/settings.php`, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert('✅ Settings updated!');
      settingsForm.reset();
    } else {
      alert('❌ Failed to update settings: ' + result.message);
    }
  });
}
