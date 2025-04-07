// Eventuelle Funktionen für das Dashboard können hier hinzugefügt werden, z.B. Logout-Logik

// Beispiel für eine Logout-Funktion:
document.querySelector("a[href='#']").addEventListener("click", function() {
    alert("Abmelden funktioniert (jetzt für den Moment nur eine Nachricht).");
    // Hier kann die Abmeldefunktion später implementiert werden, z.B. Weiterleitung zur Login-Seite.
    window.location.href = "login.html"; // Weiterleitung zur Login-Seite
  });
  