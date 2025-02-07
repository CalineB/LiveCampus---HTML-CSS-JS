// Fonction pour obtenir l'heure actuelle en format "HH:mm"
function getCurrentTime() {
    // Crée une date locale dans le fuseau horaire "America/Guadeloupe"
    const now = new Date();
    const guadeloupeTime = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'America/Guadeloupe',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23', // Format 24h
    }).formatToParts(now);
  
    // Extrais les heures et les minutes depuis le format
    const hours = guadeloupeTime.find((part) => part.type === 'hour').value;
    const minutes = guadeloupeTime.find((part) => part.type === 'minute').value;
  
    const currentTime = `${hours}:${minutes}`;
    // console.log("Heure actuelle (Guadeloupe):", currentTime);  // Ajout de debug
    return currentTime;
  }


// 🔄 Convertit "HH:MM" en HHMM (ex: "14:30" → 1430)
function timeToInt(timeStr) {
  return parseInt(timeStr.replace(":", ""), 10);
}



// Fonction pour afficher les produits
function displayProducts(products) {
  products.forEach(product => {
    const categorySection = document.querySelector(`#${product.category} .articles`);
    if (categorySection) {
      const article = document.createElement('article');
      article.className = `article ${product.category} ${product.isGrayedOut ? 'grayed-out' : ''}`;
      
      article.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <p class="art_name">${product.name}<span>€ ${product.price.toFixed(2)}</span></p>
        <details class="details">
          <summary>Description</summary>
          <p>${product.description}</p>
        </details>
      `;
      
      // Créer le bouton "Ajouter au panier"
      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'add-to-cart';
      addToCartButton.textContent = 'Ajouter au panier';
      addToCartButton.dataset.id = product.id;
      addToCartButton.dataset.name = product.name;
      addToCartButton.dataset.price = product.price;

// Si le produit est grisé, on affiche la plage horaire de disponibilité
if (product.isGrayedOut) {
  addToCartButton.textContent = `Disponible de ${product.availableHours.start} à ${product.availableHours.end}`;
  addToCartButton.disabled = true;  // Désactiver le bouton grisé
} else {
  // Sinon, afficher un texte normal comme "Ajouter au panier"
  addToCartButton.textContent = 'Ajouter au panier';
}
    

      // Ajouter le bouton dans l'article
      article.appendChild(addToCartButton);
      // Ajouter l'article dans la section de catégorie correspondante
      categorySection.appendChild(article);
    } else {
      console.warn(`Section pour la catégorie "${product.category}" introuvable.`);
    }
  });
}

// Fonction pour récupérer les produits depuis un fichier JSON et les afficher
async function fetchProducts() {
  try {
    const response = await fetch('./script/products.json');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des produits');
    }
    const products = await response.json();

    // Mettez à jour les produits avec la classe active
    const updatedProducts = getActiveClass(products);
    console.log("Produits mis à jour :", updatedProducts); // Vérifiez les produits mis à jour

    // Affichez les produits dans la page
    displayProducts(updatedProducts);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

// Appel de la fonction pour récupérer les produits au chargement de la page
document.addEventListener("DOMContentLoaded", fetchProducts);

// Fonction pour ajouter une classe aux produits selon leurs heures de disponibilité
function getActiveClass(products) {
  const currentTime = getCurrentTime();
  const currentInt = timeToInt(currentTime);

  return products.map(product => {
    const { start, end } = product.availableHours;

    // Convertir "start" et "end" en format entier pour comparer
    const startInt = timeToInt(start);
    const endInt = timeToInt(end);

    // Vérifier si l'heure actuelle est dans la plage de disponibilité
    const isAvailable = currentInt >= startInt && currentInt <= endInt;
    const isGrayedOut = !isAvailable;

    // Retourner le produit mis à jour
    return {
      ...product,
      isGrayedOut: isGrayedOut, // Détermine si le produit doit être grisé
      class: isGrayedOut ? "grayed-out" : "available", // Classe selon l'état de disponibilité
    };
  });
}