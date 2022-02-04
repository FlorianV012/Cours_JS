function fonctionParam(arr, func) {
    const array1 = arr.sort();

    for (i = 0; i < array1.length; i++) {
        if (func(array1[0])) {
            return array1;
        } else {
            array1.shift();
        }
    }
}

console.log(fonctionParam([1, 7, 2, 3, 90, 4], function (n) { return n >= 3; }));


// ----------------- ÉNONCÉ -----------------

// Cette fonction reçoit deux paramètres, un tableau et une fonction.
// Triez le premier paramètre(arr).
// Puis retournez un nouveau tableau après avoir utilisé la fonction (second param)
// avec chacun des éléments du premier tableau.
// ----------------- CONSEILS -----------------

// shift();
// Boucle for;