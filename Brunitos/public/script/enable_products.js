// Fonction pour obtenir l'heure actuelle en Guadeloupe
function getCurrentTimeGuadeloupe() {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Guadeloupe",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  }
  
  // Fonction pour convertir une heure sous format HH:mm:ss en entier (en minutes)
  function timeToInt(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 60 + minutes + seconds / 60;
  }

  const currentTime = getCurrentTimeGuadeloupe();
  const currentInt = timeToInt(currentTime);  // Convertit l'heure en entier
  const currentDay = new Intl.DateTimeFormat("en-US", { 
    timeZone: "America/Guadeloupe", 
    weekday: "long" 
  }).format(new Date());

  console.log("📅 Jour actuel :", currentDay);
  console.log("⏰ Heure actuelle (Guadeloupe):", currentTime, `(convertie: ${currentInt})`);

  document.querySelectorAll(".product").forEach((product) => {
    const startTime = product.dataset.startTime; // Récupérer start_time depuis l'attribut data
    const endTime = product.dataset.endTime;

    if (startTime && endTime) {
        const startInt = timeToInt(startTime);
        const endInt = timeToInt(endTime);

        if (currentInt < startInt || currentInt > endInt) {
            product.classList.add("disabled"); // Ajoute une classe CSS pour griser
        }
    }
});
