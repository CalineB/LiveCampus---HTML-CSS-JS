// Se déplacer dans les différentes catégories de produit à l'aide des boutons en haut du main
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.product button'); // Tous les boutons des catégories

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Supprime la classe "active" (vert) de tous les boutons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Ajoute la classe "active" au bouton cliqué
      button.classList.add('active');

      // Récupère la catégorie depuis le texte du bouton
      const category = button.getAttribute('data-translate').split('.')[1]; // Exemple : "veg", "fish", etc.

      // Défilement vers la section correspondante
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});


/* Récupérer nos articles et leurs informations dans notre base de données JSON */
async function fetchProducts() {
  try {
    const response = await fetch('./script/products.json');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des produits');
    }
    const products = await response.json();
    console.log(products);
    displayProducts(products);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function displayProducts(products) {
  products.forEach(product => {
    const categorySection = document.querySelector(`#${product.category} .articles`);
    if (categorySection) {
      // Créer l'article
      const article = document.createElement('article');
      article.className = `article ${product.category}`;

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
      addToCartButton.dataset.id = product.id; // Ajout d'un ID pour identifier le produit
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
}


// Appeler la fonction fetch lorsque la page est chargée
window.onload = fetchProducts;


