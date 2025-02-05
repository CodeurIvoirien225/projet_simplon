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

