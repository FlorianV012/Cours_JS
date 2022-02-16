/* function diviseTableau(tab, tailleMorceau) {
    let tableauFinal = [];

    for (let i = 0; i < tab.length; i += tailleMorceau) {
        let morceau = tab.slice(i, i + tailleMorceau);
        tableauFinal.push(morceau);
    }

    return tableauFinal;
} */

function diviseTableau(tab, tailleMorceau) {
    let tableauFinal = [];

    let copieTab = [...tab];

    while (copieTab.length > 0) {
        tableauFinal.push(copieTab.splice(0, tailleMorceau))
    }

    return tableauFinal;
}




console.log(diviseTableau([4, 2, 1, 3, 5, 4, 7, 8, 9, 8], 3)); // [[4, 2, 1],[3, 5, 4],[7, 8, 9],[8]]
console.log(diviseTableau(["e", "r", "r", "m", "z", "e", "a"], 5)); // [["e", "r", "r", "m", "z"],["e", "a"]]


// -----------------  Énoncé ------------------- //

// On reçoit un tableau en premier argument, on doit le diviser en autant de sous-tableaux que possible de la taille du second argument.
// Si la taille du dernier sous-tableau est inférieure au second argument, retournez le 
// sous-tableau tel quel.
// Enfin retournez tous ces sous-tableaux dans un tableau;

// -----------------  Conseils ------------------- //

// splice()
// slice()







