document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const login = document.getElementById("login").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Czyść poprzedni komunikat
  message.textContent = "";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        login: login // to trafi do raw_user_meta_data → login
      }
    }
  });

  if (error) {
    console.error(error);
    message.textContent = "Błąd: " + error.message;
  } else {
    message.textContent = "Rejestracja udana. Sprawdź e-mail, aby aktywować konto.";
  }
});
