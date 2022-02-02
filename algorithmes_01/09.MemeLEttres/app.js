function memeLettres(arr) {

    const premierMot = arr[0].toLowerCase();
    const secondMot = arr[1].toLowerCase();

    for (i = 0; i < secondMot.length; i++) {
        if (premierMot.indexOf(secondMot[i]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(memeLettres(["concupiscence", "sens"]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();


