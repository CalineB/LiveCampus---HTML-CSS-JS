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

        // Sélectionner le premier input par défaut si aucun n'est coché
        if (!document.querySelector('input[name="delivery_method"]:checked')) {
            deliveryMethods[0].checked = true;
        }

        // Utiliser un setTimeout pour s'assurer que la mise à jour se fait après le rendu initial
        setTimeout(updateDeliveryAddressVisibility, 0);
    } else {
        console.error("Aucun bouton radio pour le mode de récupération !");
    }

    function updatePaymentAddressVisibility() {
        let selectedPayment = document.querySelector('input[name="payment_method"]:checked');

        document.querySelectorAll(".payment_address").forEach(p => {
            p.style.display = "none";
        });

        if (selectedPayment) {
            let selectedPaymentAddress = selectedPayment.closest("label").querySelector(".payment_address");
            if (selectedPaymentAddress) {
                selectedPaymentAddress.style.display = "block";
            }
        }
    }

    if (paymentMethods.length > 0) {
        paymentMethods.forEach(radio => {
            radio.disabled = false;
            radio.addEventListener("change", function () {
                console.log("Moyen de paiement sélectionné :", this.value);
                updatePaymentAddressVisibility();
            });
        });

        if (!document.querySelector('input[name="payment_method"]:checked')) {
            paymentMethods[0].checked = true;
        }

        updatePaymentAddressVisibility();
    } else {
        console.error("Aucun bouton radio pour le mode de paiement !");
    }

    addressOptions.forEach(input => {
        input.addEventListener('change', function () {
            tempAddressFields.style.display = (this.value === 'temp') ? 'block' : 'none';
        });
    });

    let selectedAddressOption = document.querySelector('input[name="delivery_address"]:checked');
    tempAddressFields.style.display = selectedAddressOption && selectedAddressOption.value === "temp" ? 'block' : 'none';
});
