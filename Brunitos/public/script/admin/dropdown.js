// Récupération des éléments
const dropdown = document.querySelector(".dropdown");
const dropdownText = document.querySelector(".dropdown-text");
const menuList = document.querySelector(".menu_btns");
const menuButtons = document.querySelectorAll(".menu_btns button.menu_btn");
const adminMainSection = document.querySelector(".admin_main_section");
const allSections = document.querySelectorAll(".admin_main_section .display");

// Au clic sur le dropdown, on bascule l'affichage du menu
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
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

    // Ajoute la classe 'selected' au bouton cliqué et la supprime des autres
    menuButtons.forEach(btn => btn.classList.remove("selected"));
    this.classList.add("selected");

    // Récupère la catégorie sélectionnée (data-category)
    const selectedCategory = this.getAttribute("data-category");
    console.log("Catégorie sélectionnée :", selectedCategory);

    // Masquer toutes les sections
    allSections.forEach(section => section.style.display = "none");

    // Afficher uniquement la section qui correspond à la catégorie sélectionnée
    const matchedDiv = document.querySelector(`.admin_main_section .${selectedCategory}`);
    
    if (matchedDiv) {
      matchedDiv.style.display = "block";
      console.log(`Affichage unique de la section : .${selectedCategory}`);
    } else {
      console.log("Aucune div trouvée avec cette classe dans .admin_main_section !");
    }
  });
});

// Si on clique en dehors du dropdown, on ferme le menu
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("active");
  }
});
