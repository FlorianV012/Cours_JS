function heureCorrecte(str) {
    const regex = /^(2[0-3]|[01]?[0-9])(:[0-5][0-9]){2}$/g;

    return regex.test(str);
}


console.log(heureCorrecte("11:35:30")); // true
console.log(heureCorrecte("90:90:90")); // false
console.log(heureCorrecte("qsdljqslkdjqslkjdqsklj")); // false


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui détecte si la chaîne de caractères qu'on lui passe est une date correcte ou pas.
// Retourne true si c'est vrai et false si c'est faux.


// -----------------  Conseils ------------------- //

// Regex








