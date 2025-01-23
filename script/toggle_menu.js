// Fermer le menu si on clique en dehors du menu

document.addEventListener('click', (event) => {
    const menuToggle = document.getElementById('menu-toggle'); // Le checkbox toggle
    const navLinks = document.querySelector('.navLinks'); // Le menu dépliant
  
    // Vérifie si le clic est en dehors du menu ET du bouton toggle
    if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
      menuToggle.checked = false; // Décoche le menu
    }
  });
  