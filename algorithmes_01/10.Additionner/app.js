function additionner(arr) {
    const nb1 = Math.min(arr[0], arr[1]);
    const nb2 = Math.max(arr[0], arr[1]);
    let somme = 0;

    // return ((nb1 + nb2) / 2) * (nb2 - nb1 +1);

    for (i = nb1; i <= nb2; i++) {
        somme += i;
    }
    return somme;
}
console.log(additionner([1, 6]))
console.log(additionner([4, 10000000]));


// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres
// qui se trouvent entre ces deux valeurs.

// ----------------- CONSEILS -----------------

// Boucle "for".
// Math.max
// Math.min


