document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.product button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-translate').split('.')[1];
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  attachCartEvents();


  function attachCartEvents() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (e) => {
        const product = {
          name: e.target.dataset.name,
          price: parseFloat(e.target.dataset.price),
          image: e.target.closest('article').querySelector('img').src,
          quantity: 1,
        };

        showMessageOnPage(`"${product.name}" ajouté au panier !`);

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateBasketTitle();
      });
    });
  }

});

// Fonction pour afficher une notification d'ajout au panier
function showMessageOnPage(message, timeout = 3000) {
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    Object.assign(container.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '1000',
    });
    document.body.appendChild(container);
  }

  const messageBox = document.createElement('div');
  messageBox.textContent = message;
  Object.assign(messageBox.style, {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    opacity: '1',
    transition: 'opacity 0.5s',
  });

  container.appendChild(messageBox);
  setTimeout(() => {
    messageBox.style.opacity = '0';
    setTimeout(() => messageBox.remove(), 500);
  }, timeout);
}
// Initialisation de l'affichage au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const articlesContainer = document.querySelector('.inBasket');

  // Vérifier si la section existe
  if (articlesContainer) {
    renderCart(); // Afficher les produits du panier

    articlesContainer.addEventListener('click', (e) => {
      const removeButton = e.target.closest('.remove');
      if (removeButton) {
        const index = removeButton.dataset.index;
        removeProduct(index);
        updateBasketTitle();
      }
    });

    // Fonction pour supprimer un produit du panier
    function removeProduct(index) {
      if (index !== undefined && index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); // Redessiner le panier
      } else {
        console.error('Index de produit invalide:', index);
      }
    }

    // Fonction pour afficher les produits du panier
    function renderCart() {
      articlesContainer.innerHTML = ''; // Réinitialiser l'affichage

      cart.forEach((product, index) => {
        const article = document.createElement('div');
        article.classList.add('article', 'toBuy');
        article.dataset.index = index;

        article.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="art_qnt">
            <p class="art_name">${product.name}</p>
            <input type="number" class="quantity" value="${product.quantity}" min="1" data-index="${index}">
          </div>
          <span class="price art_price">€ ${(product.price * product.quantity).toFixed(2)}</span>
          <button class="remove" data-index="${index}">
            <i class="bx bx-trash" style="color:#8b0000"></i>
          </button>
        `;
        articlesContainer.appendChild(article);
      });

      calculateTotals(); // Calculer les totaux du panier
    }

    // Calculer les totaux (total HT, TVA, etc.)
    function calculateTotals() {
      let totalHT = 0;
      cart.forEach((product) => {
        totalHT += product.price * product.quantity;
      });

      const livraison = 3.50;
      const TVA = totalHT * 0.2;
      const totalTTC = totalHT + livraison + TVA;

      document.querySelector('.ht_price').innerText = `€ ${totalHT.toFixed(2)}`;
      document.querySelector('.shipp_price').innerText = `€ ${livraison.toFixed(2)}`;
      document.querySelector('.vat_value').innerText = `€ ${TVA.toFixed(2)}`;
      document.querySelector('.ttc_price').innerText = `€ ${totalTTC.toFixed(2)}`;
    }

    // Ajouter l'événement pour écouter les changements de quantité
    articlesContainer.addEventListener('input', (e) => {
      if (e.target.classList.contains('quantity')) {
        const index = e.target.dataset.index;
        const newQuantity = e.target.value;

        updateQuantity(index, newQuantity);
        updateBasketTitle(); // Mettre à jour la quantité d'article dans le panier
      }
    });

    // Fonction pour mettre à jour la quantité d'un produit
    function updateQuantity(index, newQuantity) {
      const quantity = parseInt(newQuantity, 10);
      if (quantity > 0 && index >= 0 && index < cart.length) {
        cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    }
  }

  // Fonction pour mettre à jour la quantité d'article dans le panier (dans le titre)
  function updateBasketTitle() {
    const totalArticles = cart.reduce((sum, product) => sum + product.quantity, 0);
    const manyArticleElement = document.querySelector('.many_article');
    manyArticleElement.innerText = `${totalArticles} ${totalArticles > 1 ? 'articles' : 'article'}`;
  }

  updateBasketTitle(); // Appeler cette fonction au chargement de la page
});
