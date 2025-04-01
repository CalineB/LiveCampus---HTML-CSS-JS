const { Product, ProductAvailability } = require('../../server/models');

const renderProducts = async (_, res) => {
    try {
        const currentDay = new Intl.DateTimeFormat("en-GB", { 
            timeZone: "America/Guadeloupe", 
            weekday: "long" 
        }).format(new Date());

        const currentTime = new Intl.DateTimeFormat("en-GB", {
            timeZone: "America/Guadeloupe",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(new Date());

        // Fonction pour convertir une heure sous format HH:mm:ss en minutes
        const timeToInt = (timeString) => {
            if (!timeString) return null;
            const [hours, minutes, seconds] = timeString.split(':').map(Number);
            return hours * 60 + (minutes || 0) + (seconds || 0) / 60;
        };

        const currentInt = timeToInt(currentTime);

        console.log("Jour actuel :", currentDay);
        console.log(`Heure actuelle : ${currentTime}, convertie : ${currentInt}`);

        // Récupération des produits avec leurs créneaux horaires
        const products = await Product.findAll({
            include: [
                {
                    model: ProductAvailability,
                    as: 'product_availabilities',
                    where: { day_of_week: currentDay },
                    required: false,
                    attributes: ['start_time', 'end_time'] 
                }
            ]
        });

        if (!products || products.length === 0) {
            console.log("Aucun produit trouvé pour le jour :", currentDay);
            return res.status(404).render('products', { products: [], error: 'Aucun produit trouvé pour ce jour.' });
        }

        // Vérifier la disponibilité et mettre à jour isGrayedOut
        products.forEach(product => {
            if (product.product_availabilities.length > 0) {
                const { start_time, end_time } = product.product_availabilities[0];
                const startInt = timeToInt(start_time);
                const endInt = timeToInt(end_time);
        
                console.log(`Produit: ${product.name}`);
                console.log(`Heure actuelle: ${currentInt}`);
                console.log(`Créneau: ${start_time} - ${end_time}`);
                console.log(`StartInt: ${startInt}, EndInt: ${endInt}`);
                console.log(`Grisé ? : ${!(currentInt >= startInt && currentInt <= endInt)}`);
        
                // Griser uniquement si l'heure actuelle est en dehors du créneau
                product.isGrayedOut = !(currentInt >= startInt && currentInt <= endInt);
            } else {
                product.isGrayedOut = false; // Pas de créneau, pas grisé
            }
        });
        
        

        console.log("Produits après mise à jour :", products);

        res.render('products', { products });
        console.log("Produits envoyés à la vue :", JSON.stringify(products, null, 2));


    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).render('products', { products: [], error: 'Erreur serveur lors de la récupération des produits.' });
    }
};

module.exports = { renderProducts };