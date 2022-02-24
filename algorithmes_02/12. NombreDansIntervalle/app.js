function intervalle(min, max, nb) {

    // return min < nb && max > nb;

    // return (nb - min) * (nb - max) < 0

    return min < nb == nb < max;
};

console.log(intervalle(10, 200, 35)); // true


// -----------------  Énoncé ------------------- //

// Créez un algorithme pour savoir si le nombre qui correspond au troisieme argument tombe dans
// l'intervalle des deux premiers arguments.
// Retourne true ou false.

// -----------------  Conseils ------------------- //


// &&
// ==
//...






