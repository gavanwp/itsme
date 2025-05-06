document.addEventListener('DOMContentLoaded', function() {
  // Check if user is already logged in
  if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'dashboard.html';
  }
  
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Client-side validation with the specified credentials
    if (username === 'shumii' && password === 'Gavan kumar') {
      // Save login state if remember me is checked
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    } else {
      // Show error message and add shake animation
      errorMessage.classList.remove('hidden');
      loginForm.classList.add('shake');
      
      // Remove shake animation after it completes
      setTimeout(function() {
        loginForm.classList.remove('shake');
      }, 500);
    }
  });
});
