function additioneNbPremiers(num) {

    // Vérifie si l'argument est un nombre premier
    function testNbPremier(test) {
        for (i = 2; i <= test; i++) {
            if (test % i === 0 && test != i) {
                return false;
            }
        }
        return true;
    }

    if (num === 1) {
        return 0
    } else if (testNbPremier(num) === false) {
        return additioneNbPremiers(num - 1);
    } else if (testNbPremier(num) === true) {
        return num + additioneNbPremiers(num - 1);
    }

}
console.log(additioneNbPremiers(10));

// additioneNbPremiers(10) = 17;

// ----------------- ÉNONCÉ -----------------

// Additione tous les nombres premiers d'un nombre donné, en comptant ce nombre.
// Les nombres premiers sont les nombres qui peuvent seulement être divisés par 1 et
// par eux-mêmes.
// 1 n'est pas un nombre premier.
// La liste des nombres premiers commencent comme cela :
// 2, 3, 5, 7, 11, 13, 17, 19 etc ...

// ----------------- CONSEILS -----------------

// Recursion.
// Fonction dans une fonction.
// If, For ...
// Modulo (%).