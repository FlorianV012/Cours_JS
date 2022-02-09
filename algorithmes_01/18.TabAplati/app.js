function aplatisCeTableau(arr) {

    let tableauFinal = [];

    function aplatir(arg) {
        if (Array.isArray(arg)) {
            for (i = 0; i < arr.length; i++) {
                aplatir(arg[i]);
            }
        } else {
            tableauFinal.push(arg)
        }
    }
    arr.forEach(aplatir);

    return tableauFinal;
}

console.log(aplatisCeTableau([1, {}, [3, [[4]]]]));

// [1, [2], [3, [[4]]]]  retourne [1,2,3,4];
// ([1, [], [3, [[4]]]]) retourne [1, 3, 4].
// [1, {}, [3, [[4]]]]   retourne [1, {}, 3, 4].

// ----------------- ÉNONCÉ -----------------

// Cet algorithme prends un tableau composé lui même de plusieurs tableaux en
// entrée. Vous devez "aplatir" les différentes couches de tableaux, c'est à dire
// retourner un seul tableau qui contient les valeurs de tous les tableaux qui le
// composent.


// ----------------- CONSEILS -----------------

// Recursion;
// Array.isArray();
// forEach();
// Boucle for...