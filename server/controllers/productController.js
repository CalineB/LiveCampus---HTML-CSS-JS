const db = require("../models");

const getCurrentTimeGuadeloupe = () => {
    return new Intl.DateTimeFormat("fr-FR", { 
        timeZone: "America/Guadeloupe", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit",
        hour12: false 
    }).format(new Date());
};

const timeToInt = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 100 + minutes;
};

const renderProducts = async (req, res) => {
    const currentTime = getCurrentTimeGuadeloupe();
    const currentInt = timeToInt(currentTime);
    const currentDay = new Intl.DateTimeFormat("en-US", { 
        timeZone: "America/Guadeloupe", 
        weekday: "long" 
    }).format(new Date());

    try {
        const products = await db.Product.findAll({
            include: [
                {
                    model: db.Category,
                    as: 'category',
                    attributes: ['name']
                },
                {
                    model: db.ProductAvailability,
                    as: 'product_availabilities',
                    where: { day_of_week: currentDay },
                    required: false,
                }
            ],
        });

        const formattedProducts = products.map((product) => {
            let isAvailable = false;
            
            if (product.product_availabilities.length > 0) {
                const availability = product.product_availabilities[0]; 
                const startInt = timeToInt(availability.start_time);
                const endInt = timeToInt(availability.end_time);
                isAvailable = currentInt >= startInt && currentInt <= endInt;
            }

            return {
                id: product.product_id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image || '/default-image.jpg',
                category: product.category ? product.category.name : "Inconnu",
                isGrayedOut: !isAvailable,
                class: isAvailable ? "available" : "grayed-out",
            };
        });

        // **➡️ On rend la vue `products.ejs` avec les produits**
        res.render("products", { products: formattedProducts });

    } catch (error) {
        console.error("❌ Erreur lors de la récupération des produits:", error);
        res.status(500).send("Erreur serveur");
    }
};

module.exports = { renderProducts };
