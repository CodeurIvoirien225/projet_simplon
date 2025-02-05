
// Sélectionner tous les liens de navigation
const links = document.querySelectorAll('a[href^="#"]');

// Ajouter un événement 'click' sur chaque lien
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du lien

    const targetId = link.getAttribute('href').substring(1); // Obtenir l'ID de la section cible
    const targetElement = document.getElementById(targetId); // Sélectionner l'élément cible

    // Défilement fluide vers l'élément cible
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Optionnel, pour définir la position du défilement
    });
  });
});




// Sélection des éléments HTML
let btn = document.getElementById("parcoursBtn");
let texte = document.getElementById("parcoursTexte");


btn.addEventListener("click", () => {
    if (!texte.classList.contains("visible")) {
        texte.classList.add("visible"); // Ajoute la classe pour afficher avec animation

    } else {
        texte.classList.remove("visible"); // Supprime la classe pour cacher avec animation
    }
})

