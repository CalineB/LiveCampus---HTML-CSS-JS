const pool = require('../../../database/users.sql');

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

const placeOrder = async (req, res) => {
  try {
      const { user_id, address_id, temp_address, save_address } = req.body;
      let delivery_address_id;

      await pool.query('BEGIN'); // Démarre une transaction SQL

      if (address_id) {
          // Utilisation d’une adresse enregistrée
          delivery_address_id = address_id;
      } else if (temp_address?.street && temp_address?.postal_code && temp_address?.city) {
          // Création d'une adresse temporaire
          const result = await pool.query(
              "INSERT INTO addresses (user_id, type, street, street_number, additional_line, postal_code, city) VALUES ($1, 'temp', $2, $3, $4, $5, $6) RETURNING id",
              [user_id, temp_address.street, temp_address.street_number, temp_address.additional_line, temp_address.postal_code, temp_address.city]
          );
          delivery_address_id = result.rows[0].id;

          // Si l’utilisateur veut enregistrer l’adresse
          if (save_address) {
              await pool.query("UPDATE addresses SET type = 'other' WHERE id = $1", [delivery_address_id]);
          }
      } else {
          return res.status(400).json({ error: "Aucune adresse valide fournie" });
      }

      // Enregistrer la commande
      const orderResult = await pool.query(
          "INSERT INTO orders (user_id, address_id) VALUES ($1, $2) RETURNING id",
          [user_id, delivery_address_id]
      );

      const orderId = orderResult.rows[0].id;

      // Supprimer l’adresse temporaire après usage si non enregistrée
      if (!save_address && address_id === undefined) {
          await pool.query("DELETE FROM addresses WHERE id = $1", [delivery_address_id]);
      }

      await pool.query('COMMIT'); // Valide la transaction

      res.json({ message: "Commande passée avec succès", order_id: orderId });

  } catch (error) {
      await pool.query('ROLLBACK'); // Annule la transaction en cas d'erreur
      console.error("Erreur lors du passage de commande:", error);
      res.status(500).json({ error: "Erreur serveur" });
  }
};


  module.exports = { renderBasket, renderOrder, placeOrder };
