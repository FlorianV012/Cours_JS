function puissance(a, n) {
    if (n === 0) {
        return 1
    } else {
        return a * puissance(a, n - 1)
    }
};

console.log(puissance(4, 2)); //16
console.log(puissance(2, 10));

// -----------------  Énoncé ------------------- //

// Créez un algorithme pour calculer la puissance(second argument) d'un nombre(premier argument).
// Utiliser la récursion convient parfaitement à ce genre de problème.

// -----------------  Conseils ------------------- //


// recursion