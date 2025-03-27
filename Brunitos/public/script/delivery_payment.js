document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé");

    let deliveryMethods = document.querySelectorAll('input[name="delivery_method"]');
    let paymentMethods = document.querySelectorAll('input[name="payment_method"]');
    let deliveryAddressSection = document.getElementById("delivery_address");
    let cashOption = document.getElementById("cashPayment");
    let addressOptions = document.querySelectorAll('input[name="delivery_address"]');
    let tempAddressFields = document.getElementById("temp-address-fields");

    console.log("Modes de récupération trouvés :", deliveryMethods.length);
    console.log("Modes de paiement trouvés :", paymentMethods.length);

    function updateDeliveryAddressVisibility() {
        let selectedMethod = document.querySelector('input[name="delivery_method"]:checked').value;
        deliveryAddressSection.style.display = (selectedMethod === "livraison") ? "block" : "none";
        cashOption.disabled = (selectedMethod === "livraison"); // Désactive les espèces en livraison
    }

    if (deliveryMethods.length > 0) {
        deliveryMethods.forEach(radio => {
            radio.disabled = false;
            radio.addEventListener("change", updateDeliveryAddressVisibility);
        });

        if (!document.querySelector('input[name="delivery_method"]:checked')) {
            deliveryMethods[0].checked = true;
        }

        updateDeliveryAddressVisibility(); // Appel initial
    } else {
        console.error("Aucun bouton radio pour le mode de récupération !");
    }

    if (paymentMethods.length > 0) {
        paymentMethods.forEach(radio => {
            radio.disabled = false;
            radio.addEventListener("change", function () {
                console.log("Moyen de paiement sélectionné :", this.value);
            });
        });

        if (!document.querySelector('input[name="payment_method"]:checked')) {
            paymentMethods[0].checked = true;
        }
    } else {
        console.error("Aucun bouton radio pour le mode de paiement !");
    }

    // Affichage des champs de l'adresse temporaire si "temp" est sélectionné
    addressOptions.forEach(input => {
        input.addEventListener('change', function () {
            tempAddressFields.style.display = (this.value === 'temp') ? 'block' : 'none';
        });
    });

    // Vérifier l'état initial
    let selectedAddressOption = document.querySelector('input[name="delivery_address"]:checked');
    if (selectedAddressOption && selectedAddressOption.value === "temp") {
        tempAddressFields.style.display = 'block';
    } else {
        tempAddressFields.style.display = 'none';
    }
});
