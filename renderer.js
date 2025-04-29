// Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Verbinden"-Button klickt
function connect() {
  const domain = document.getElementById("domain").value;

  // Überprüfen, ob die Domain leer ist
  if (!domain) {
    alert("Bitte gib eine gültige Domain ein!");
    return;
  }

  // Einfache Überprüfung, ob die eingegebene URL ein gültiges Format hat
  const domainPattern = /^(https?:\/\/)([a-zA-Z0-9-]+\.[a-zA-Z0-9-]+)+/;
  if (!domainPattern.test(domain)) {
    alert("Die eingegebene Domain ist ungültig. Bitte überprüfe die URL.");
    return;
  }

  // Wenn die Domain gültig ist, versuche eine Verbindung (hier als Beispiel)
  try {
    // Beispiel: Eine Anfrage an die Dolibarr-API oder die Domain könnte hier erfolgen
    fetch(domain + "/api/auth", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fehler bei der Verbindung zur Dolibarr-Domain.");
        }
      })
      .then((data) => {
        console.log("Erfolgreich verbunden:", data);
        alert(`Erfolgreich verbunden mit der Domain: ${domain}`);
      })
      .catch((error) => {
        console.error("Fehler:", error);
        alert("Verbindung fehlgeschlagen: " + error.message);
      });
  } catch (error) {
    console.error("Fehler beim Verbinden:", error);
    alert("Es gab einen Fehler beim Verbinden.");
  }
}

// Setze eine Standarddomain, wenn die App geladen wird
window.onload = () => {
  const domainInput = document.getElementById("domain");
  domainInput.value = "http://192.168.3.85:8383"; // Voreingestellte Domain (kann später geändert werden)
};

// Optional: Füge zusätzliche Event Listener hinzu, falls nötig
document.getElementById("domain").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    connect(); // Wenn der Benutzer Enter drückt, wird ebenfalls die Verbindung hergestellt
  }
});
