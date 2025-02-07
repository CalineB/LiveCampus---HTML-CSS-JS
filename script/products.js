// Se déplacer dans les différentes catégories de produit à l'aide des boutons en haut du main
document.addEventListener('DOMContentLoaded', () => {
  
  // Sélection des boutons pour les catégories de produits
  const buttons = document.querySelectorAll('.product button'); // Tous les boutons des catégories
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      
      // Supprime la classe "active" de tous les boutons
      buttons.forEach(btn => btn.classList.remove('active'));
      
      // Ajoute la classe "active" au bouton cliqué
      button.classList.add('active');
      
      // Récupère la catégorie depuis le texte du bouton
      const category = button.getAttribute('data-translate').split('.')[1];
      
      // Défilement vers la section correspondante
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Fonction pour récupérer et afficher les produits
  async function fetchProducts() {
    try {
      const response = await fetch('./script/products.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des produits');
      }
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  // Affichage des produits dans les sections correspondante de la page products.html
  function displayProducts(products) {
    products.forEach(product => {
      const categorySection = document.querySelector(`#${product.category} .articles`);
      if (categorySection) {
        // Créer l'article
        const article = document.createElement('article');
        article.className = `article ${product.category} ${product.isGrayedOut ? 'grayed-out' : ''}`;
        // Ajouter le contenu principal
        article.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <p class="art_name">${product.name}<span>€ ${product.price.toFixed(2)}</span></p>
          <details class="details">
            <summary>Description</summary>
            <p>${product.description}</p>
          </details>
        `;
        
        // Créer dynamiquement le bouton "Ajouter au panier"
        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'add-to-cart';
        addToCartButton.textContent = 'Ajouter au panier';
        addToCartButton.dataset.id = product.id;
        addToCartButton.dataset.name = product.name;
        addToCartButton.dataset.price = product.price;

        // Ajouter le bouton dans l'article
        article.appendChild(addToCartButton);
        // Ajouter l'article dans la section correspondante
        categorySection.appendChild(article);
      } else {
        console.warn(`Section pour la catégorie "${product.category}" introuvable.`);
      }
    });

    // Sélection des boutons "Ajouter au panier"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Création de l'objet produit à ajouter
        const product = {
          name: e.target.dataset.name,
          price:parseFloat(e.target.dataset.price),
          image: e.target.closest('article').querySelector('img').src,
          quantity: 1,
        };

        // Afficher un message qui confirmer l'ajout au panier.
        showMessageOnPage(`"${product.name}" ajouté au panier !`);

        // Récupérer le panier actuel depuis le LocalStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // console.log("Panier récupéré depuis le localStorage :", cart);
        
        // Vérifier si le produit est déjà dans le panier
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          cart.push(product);
        }
        // Sauvegarder le panier mis à jour dans le LocalStorage
        localStorage.setItem('cart', JSON.stringify(cart));

            // Mettre à jour le nombre total d'article(s) dans le panier.
        updateBasketTitle();
      });
    });
  }
  // Appeler la fonction fetch au chargement de la page
  fetchProducts();
});

// Fonction pour indiquer que l'article a bien été ajouté au panier
if (window.location.pathname.includes("products.html"))  {
  function showMessageOnPage(message, timeout = 3000) {
  // Sélectionne ou crée le conteneur pour les notifications
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

  // Crée un élément pour le message
  const messageBox = document.createElement('div');
  messageBox.textContent = message;

  // Style du message
  Object.assign(messageBox.style, {
    backgroundColor: '#4caf50', // Vert pour succès
    color: '#fff',
    padding: '10px 20px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    opacity: '1',
    transition: 'opacity 0.5s',
  });

  // Ajoute le message au conteneur
  container.appendChild(messageBox);

  // Supprime le message après le délai
  setTimeout(() => {
    messageBox.style.opacity = '0'; // Transition douce
    setTimeout(() => messageBox.remove(), 500); // Supprime après l'animation
  }, timeout);
}
}


// Récupérer les articles du panier depuis le LocalStorage et les afficher
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const articlesContainer = document.querySelector('.inBasket');

 // Vérifier si la section existe
 if (articlesContainer) {
  // Afficher les produits du panier
  renderCart();

  articlesContainer.addEventListener('click', (e) => {
    // Vérifier si le clic provient du bouton de suppression
    const removeButton = e.target.closest('.remove');
    if (removeButton) {
      // Récupérer l'index du produit à supprimer
      const index = removeButton.dataset.index;
      removeProduct(index);  // Supprimer le produit du panier
      updateBasketTitle();   // Mettre à jour la quantité d'article dans le panier

    }
  });
  
  // Fonction pour supprimer un produit du panier
  function removeProduct(index) {
    // Vérifier si l'index est valide avant de supprimer un produit
    if (index !== undefined && index >= 0 && index < cart.length) {
      cart.splice(index, 1);  // Supprimer l'élément à l'index donné
      localStorage.setItem('cart', JSON.stringify(cart));  // Mettre à jour le localStorage
      renderCart();  // Redessiner le panier
    } else {
      console.error('Index de produit invalide:', index);
    }
  }

  
  // Fonction pour afficher les produits du panier
  function renderCart() {
    articlesContainer.innerHTML = '';  // Réinitialiser l'affichage
    
    cart.forEach((product, index) => {
      const article = document.createElement('div');
      article.classList.add('article', 'toBuy');
      article.dataset.index = index;  // Ajouter l'index du produit

      console.log(`Produit: ${product.name}, Prix: €${product.price}, Quantité: ${product.quantity}`);

      article.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="art_qnt">
          <p class="art_name">${product.name}</p>
          <input type="number" class="quantity" value="${product.quantity}" min="1" data-index="${index}">
        </div>
      <span class="price art_price">€ ${(product.price * product.quantity).toFixed(2)}</span>
        <button class="remove" data-index="${index}">
          <i class='bx bx-trash' style='color:#8b0000'></i>
        </button>
      `;
      articlesContainer.appendChild(article);
    });

    calculateTotals();  // Calculer les totaux du panier
  }
  
  // Calculer les totaux (total HT, TVA, etc.)
  function calculateTotals() {
    let totalHT = 0;
    
    // Itérer sur le tableau des produits et calculer le total HT
    for (let i = 0; i < cart.length; i++) {
        totalHT += cart[i].price * cart[i].quantity;
    }
        
    const livraison = 3.50;
    const TVA = totalHT * 0.2;  // Calcul de la TVA sans `toFixed` pour garder un nombre
    const totalTTC = totalHT + livraison + TVA;  // Calcul du total TTC
    
    // console.log(`Total HT: € ${totalHT.toFixed(2)}`);
    // console.log(`TVA: € ${TVA.toFixed(2)}`);
    // console.log(`livraison: € ${livraison.toFixed(2)}`);
    // console.log(`Total TTC: € ${totalTTC.toFixed(2)}`);



    // Mettre à jour l'affichage des prix dans le panier.
    document.querySelector('.ht_price').innerText = `€ ${totalHT.toFixed(2)}`;
    document.querySelector('.shipp_price').innerText = `€ ${livraison.toFixed(2)}`;
    document.querySelector('.vat_value').innerText = `€ ${TVA.toFixed(2)}`;
    document.querySelector('.ttc_price').innerText = `€ ${totalTTC.toFixed(2)}`;
  };

}

// Ajouter l'événement pour écouter les changements de quantité
articlesContainer.addEventListener('input', (e) => {
  if (e.target.classList.contains('quantity')) {
    const index = e.target.dataset.index;
    const newQuantity = e.target.value;

    // Mettre à jour la quantité dans le panier
    updateQuantity(index, newQuantity);
    updateBasketTitle(); // Mettre à jour la quantité d'article dans le panier.

  }
});

  
  // Fonction pour mettre à jour la quantité d'un produit
  function updateQuantity(index, newQuantity) {
    const quantity = parseInt(newQuantity, 10);  // Convertir la quantité en entier
    if (quantity > 0 && index >= 0 && index < cart.length) {
      cart[index].quantity = quantity;  // Mettre à jour la quantité du produit
      localStorage.setItem('cart', JSON.stringify(cart));  // Sauvegarder dans le LocalStorage
      renderCart();  // Redessiner le panier
    }
  }


function updateBasketTitle() {
  // Calculer le nombre total d'articles dans le panier
  const totalArticles = cart.reduce((sum, product) => sum + product.quantity, 0);

  // Sélectionner l'élément avec la classe .many_article
  const manyArticleElement = document.querySelector('.many_article');

  // Mettre à jour le texte avec le nombre d'articles
  manyArticleElement.innerText = `${totalArticles} ${totalArticles > 1 ? 'articles' : 'article'}`;
}

// Appeler cette fonction après chaque modification du panier
updateBasketTitle();
