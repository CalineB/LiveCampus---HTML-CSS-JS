
const renderBasket = (req, res) => {
  try {
    const basket = req.session?.basket || []; // Vérifie si req.session existe avant d'accéder à basket
    const basketCount = basket.length; // Nombre d'articles dans le panier

    // Calculer le total sans taxes (HT)
    const totalWithoutTax = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    // Autres calculs
    const shippingCost = 5; // Exemple de frais de livraison
    const vat = totalWithoutTax * 0.2; // TVA de 20%
    const totalWithTax = totalWithoutTax + shippingCost + vat;

    // Envoyer les données à la vue
    res.render('basket', { basket, basketCount, totalWithoutTax, shippingCost, vat, totalWithTax });
  } catch (error) {
    console.error('Erreur lors du rendu du panier:', error);
    res.status(500).send('Erreur serveur');
  }
};

const renderOrder = (req, res) => {
  res.render('delivery_payment_choice')
}

  module.exports = { renderBasket, renderOrder };
