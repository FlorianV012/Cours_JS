// Méthode 1
function difTab(arr1, arr2) {

    let result = [];

    function verif(tab1, tab2) {
        for (i = 0; i < tab1.length; i++) {
            if (tab2.indexOf(tab1[i]) === -1) {
                result.push(tab1[i]);
            }
        }
    }
    verif(arr1, arr2);
    verif(arr2, arr1);

    return result;
}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Méthode 2
function difTab2(arr1, arr2) {
    const result1 = arr1.filter(x => arr2.indexOf(x) === -1);
    const result2 = arr2.filter(x => arr1.indexOf(x) === -1);
    const result = result1.concat(result2);

    return result;
}
console.log(difTab2([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();