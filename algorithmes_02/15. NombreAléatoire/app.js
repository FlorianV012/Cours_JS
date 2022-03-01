const nbAleatoire = (min, max) => {
    return Math.floor((max - min + 1) * Math.random()) + min
}

console.log(nbAleatoire(1, 10)); // un nombre entre 1 et 10 inclu
console.log(nbAleatoire(10, 15)); // un nombre entre 10 et 15 inclu
console.log(nbAleatoire(90, 95)); // un nombre entre 90 et 95 inclu


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui renvoie un nombre aléatoire dans un intervalle donné.


// -----------------  Conseils ------------------- //


// Math.floor()
// Math.random()





