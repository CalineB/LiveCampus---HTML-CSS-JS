document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM entièrement chargé et analysé');
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Vérifie si le bouton est trouvé
    if (!darkModeToggle) {
      console.error('Le bouton #darkModeToggle est introuvable.');
      return;
    }
  
    // console.log('Bouton trouvé :', darkModeToggle);
  
    // Vérifie si une préférence est déjà enregistrée
    const darkMode = localStorage.getItem('darkMode');
    console.log('Préférence actuelle dans localStorage :', darkMode);
  
    if (darkMode === 'enabled') {
      console.log('Mode sombre activé depuis localStorage');
      body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️'; // Icône de soleil
      darkModeToggle.style.backgroundColor = 'skyblue'; // Fond bleu ciel pour le soleil
    } else {
      console.log('Mode clair activé par défaut ou localStorage désactivé');
      darkModeToggle.textContent = '🌙'; // Icône de lune
      darkModeToggle.style.backgroundColor = 'midnightblue'; // Fond bleu foncé pour la lune
    }
  
    // Ajoute un événement au clic pour activer/désactiver le mode sombre
    darkModeToggle.addEventListener('click', () => {
      //console.log('Bouton cliqué');
      
      if (body.classList.contains('dark-mode')) {
        console.log('Mode sombre désactivé');
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌙'; // Icône de lune
        darkModeToggle.style.backgroundColor = 'midnightblue'; // Fond bleu foncé pour la lune
      } else {
        console.log('Mode sombre activé');
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️'; // Icône de soleil
        darkModeToggle.style.backgroundColor = 'skyblue'; // Fond bleu ciel pour le soleil
      }
  
      console.log('État actuel du mode sombre :', body.classList.contains('dark-mode') ? 'activé' : 'désactivé');
      console.log('Préférence mise à jour dans localStorage :', localStorage.getItem('darkMode'));
    });
  });
  
  