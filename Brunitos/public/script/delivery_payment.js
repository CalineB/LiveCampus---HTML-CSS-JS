document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé");

    // Vérifier si les boutons radio existent
    let deliveryMethods = document.querySelectorAll('input[name="delivery_method"]');
    let paymentMethods = document.querySelectorAll('input[name="payment_method"]');
    let cashOption = document.getElementById("cashPayment");

    console.log("Modes de récupération trouvés :", deliveryMethods.length);
    console.log("Modes de paiement trouvés :", paymentMethods.length);

    // Vérifier si les boutons radio sont bien dans le DOM
    if (deliveryMethods.length > 0) {
        deliveryMethods.forEach(radio => {
            radio.disabled = false; // Assurer qu'ils sont activés

            // Ajout du listener 'change' pour chaque radio
            radio.addEventListener("change", function () {
                console.log("Mode de récupération sélectionné :", this.value);
                cashOption.disabled = (this.value === "livraison");
            });
        });

        // Sélectionne une option si aucune n'est cochée
        if (!document.querySelector('input[name="delivery_method"]:checked')) {
            deliveryMethods[0].checked = true;
        }
    } else {
        console.error("Aucun bouton radio pour le mode de récupération !");
    }

    if (paymentMethods.length > 0) {
        paymentMethods.forEach(radio => {
            radio.disabled = false; // Assurer qu'ils sont activés

            // Ajout du listener 'change' pour chaque radio
            radio.addEventListener("change", function () {
                console.log("Moyen de paiement sélectionné :", this.value);
            });
        });

        // Sélectionne une option si aucune n'est cochée
        if (!document.querySelector('input[name="payment_method"]:checked')) {
            paymentMethods[0].checked = true;
        }
    } else {
        console.error("Aucun bouton radio pour le mode de paiement !");
    }
});
