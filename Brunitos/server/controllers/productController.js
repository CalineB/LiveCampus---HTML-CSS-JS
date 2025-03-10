const { Product, ProductAvailability } = require('../../server/models');

const renderProducts = async (_, res) => {
    try {
        const currentDay = new Intl.DateTimeFormat("en-US", { 
            timeZone: "America/Guadeloupe", 
            weekday: "long" 
        }).format(new Date());

        console.log("Jour actuel (Guadeloupe) :", currentDay);

        // Récupération des produits avec leurs créneaux horaires
        const products = await Product.findAll({
            include: [
                {
                    model: ProductAvailability,
                    as: 'product_availabilities',
                    where: { day_of_week: currentDay },
                    required: false, // Permet de récupérer les produits même sans disponibilités
                    attributes: ['start_time', 'end_time'] 
                }
            ]
        });

        if (!products || products.length === 0) {
            console.log("Aucun produit trouvé pour le jour :", currentDay);
            return res.status(404).render('products', { products: [], error: 'Aucun produit trouvé pour ce jour.' });
        }

        console.log("Produits récupérés:", products);

        // Rendre la vue avec les produits récupérés
        res.render('products', { products });

    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).render('products', { products: [], error: 'Erreur serveur lors de la récupération des produits.' });
    }
};

module.exports = { renderProducts };
