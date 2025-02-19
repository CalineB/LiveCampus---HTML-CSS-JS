// Fermer le menu si on clique en dehors du menu

document.addEventListener('click', (event) => {
  const menuToggle = document.getElementById('menu-toggle'); // Le checkbox toggle
  const navLinks = document.querySelector('.navLinks'); // Le menu dépliant

  // Vérifie que les éléments existent avant d'exécuter le code
  if (!menuToggle || !navLinks) return;

  // Vérifie si le clic est en dehors du menu et du bouton toggle
  if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
    menuToggle.checked = false; // Décoche le menu
  }
});
