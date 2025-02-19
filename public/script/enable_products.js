async function getProductsWithAvailability() {
    const currentTime = getCurrentTimeGuadeloupe();
    const currentInt = timeToInt(currentTime);
    const currentDay = new Intl.DateTimeFormat("en-US", { 
        timeZone: "America/Guadeloupe", 
        weekday: "long" 
    }).format(new Date());

    console.log("📅 Jour actuel :", currentDay);
    console.log("⏰ Heure actuelle (Guadeloupe):", currentTime, `(convertie: ${currentInt})`);

    try {
        const products = await Product.findAll({
            include: [
                {
                    model: ProductAvailability,
                    where: { day_of_week: currentDay },
                    required: false, 
                },
            ],
        });

        console.log(`🔎 Nombre total de produits récupérés: ${products.length}`);

        return products.map((product) => {
            console.log(`\n🛒 Produit: ${product.name}`);

            if (product.ProductAvailabilities.length > 0) {
                const availability = product.ProductAvailabilities[0]; 
                const startInt = timeToInt(availability.start_time);
                const endInt = timeToInt(availability.end_time);

                const isAvailable = currentInt >= startInt && currentInt <= endInt;

                console.log(`   ⏳ Horaire: ${availability.start_time} → ${availability.end_time} (converti: ${startInt} → ${endInt})`);
                console.log(`   🔍 Comparaison: ${startInt} <= ${currentInt} <= ${endInt}`);
                console.log(`   ✅ Disponible: ${isAvailable ? "OUI" : "NON"}`);

                return {
                    ...product.toJSON(),
                    isGrayedOut: !isAvailable,
                    class: isAvailable ? "available" : "grayed-out",
                };
            }

            console.log(`   ❌ Aucune disponibilité trouvée pour aujourd'hui`);
            return {
                ...product.toJSON(),
                isGrayedOut: true,
                class: "grayed-out",
            };
        });

    } catch (error) {
        console.error("❌ Erreur lors de la récupération des produits:", error);
        throw new Error("Erreur serveur");
    }
}
