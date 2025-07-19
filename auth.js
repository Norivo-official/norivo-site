
document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const { error } = await db.auth.signUp({ email, password });
      document.getElementById('message').textContent = error ? error.message : 'Sprawdź skrzynkę e-mail, aby aktywować konto.';
    });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const { data, error } = await db.auth.signInWithPassword({ email, password });
      if (error) {
        document.getElementById('message').textContent = error.message;
      } else {
        localStorage.setItem("user_email", email);
        window.location.href = "dashboard.html";
      }
    });
  }
});
