document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Hier kannst du eine Überprüfung hinzufügen, um die Anmeldedaten zu verifizieren
  if (username === "admin" && password === "password123") {
    alert("Erfolgreich eingeloggt!");
    // Weiterleitung zum Dashboard
    window.location.href = "templates/dashboard/dashboard.html"; // Lokale Weiterleitung zur Dashboard-Seite
  } else {
    alert("Ungültiger Benutzername oder Passwort!");
  }
});
