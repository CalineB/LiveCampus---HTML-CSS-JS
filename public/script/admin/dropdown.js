// Récupération des éléments
const dropdown = document.querySelector(".dropdown");
const dropdownText = document.querySelector(".dropdown-text");
const menuList = document.querySelector(".menu_btns");
const menuButtons = document.querySelectorAll(".menu_btns button.menu_btn");
const productSections = document.querySelectorAll(".main_section .display");

// Au clic sur le dropdown, on bascule l'affichage du menu
dropdown.addEventListener("click", function (event) {
  event.stopPropagation(); // Empêche la fermeture immédiate
  menuList.classList.toggle("active");
});

// Gestion de la sélection des éléments du menu
menuButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    // Met à jour le texte du dropdown avec le texte du bouton sélectionné
    dropdownText.textContent = this.textContent;

    // Ferme le menu déroulant
    menuList.classList.remove("active");

    // Gestion de l'affichage des sections correspondantes
    const selectedCategory = this.classList[1]; // Supposant que la 2e classe est la catégorie

    if (selectedCategory) {
      productSections.forEach(section => {
        section.style.display = section.classList.contains(selectedCategory) ? "block" : "none";
      });
    } else {
      productSections.forEach(section => {
        section.style.display = "block";
      });
    }
  });
});

// Si on clique en dehors du dropdown, on ferme le menu
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("active");
  }
});
