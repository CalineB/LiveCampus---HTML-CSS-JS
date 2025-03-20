document.addEventListener("DOMContentLoaded", function () {
    // Récupération correcte de l'heure actuelle en Guadeloupe
    const nowUTC = new Date();
    const options = { timeZone: "America/Guadeloupe", hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const nowGuadeloupeStr = new Intl.DateTimeFormat("fr-FR", options).format(nowUTC);

    // Convertir la chaîne de date en un objet Date correct
    const [day, month, year, hours, minutes, seconds] = nowGuadeloupeStr.match(/\d+/g).map(Number);
    const nowGuadeloupe = new Date(year, month - 1, day, hours, minutes, seconds);
    nowGuadeloupe.setMinutes(nowGuadeloupe.getMinutes() + 15); // Ajoute 15 minutes

    console.log("Heure actuelle Guadeloupe :", nowGuadeloupe.toLocaleTimeString("fr-FR"));

    // Heure limite à 23h00
    const endTime = new Date(nowGuadeloupe);
    endTime.setHours(23, 0, 0, 0);

    // Plages horaires à désactiver (14h00 - 17h30)
    const grayStartTime = 14 * 60;
    const grayEndTime = 17 * 60 + 30;

    // Fonction pour formater l'heure en HH:mm
    const formatTime = (date) => {
        return date.toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    // Génération des créneaux horaires
    let availableTimes = [];
    let timeSlot = new Date(nowGuadeloupe);

    while (timeSlot <= endTime) {
        let formattedTime = formatTime(timeSlot);
        let timeInMinutes = timeSlot.getHours() * 60 + timeSlot.getMinutes();
        let isGrayedOut = (timeInMinutes >= grayStartTime && timeInMinutes <= grayEndTime);
        
        console.log(`Créneau: ${formattedTime}, Minutes: ${timeInMinutes}, Grisé: ${isGrayedOut}`);

        availableTimes.push({ time: formattedTime, isGrayedOut });
        timeSlot.setMinutes(timeSlot.getMinutes() + 15);
    }

    // Ajout des créneaux horaires dans le <select>
    let select = document.getElementById("timeSlot");
    if (select) {
        select.innerHTML = "";

        availableTimes.forEach(slot => {
            let option = document.createElement("option");
            option.value = slot.time;
            option.textContent = slot.time;

            if (slot.isGrayedOut) {
                option.disabled = true;
            }

            select.appendChild(option);
        });

        console.log("Créneaux horaires mis à jour.");
    }
})
