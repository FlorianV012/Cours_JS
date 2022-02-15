/* function tableauxSansDoublons() {
    let nvTableau = [];

    const arr = Array.from(arguments);

    arr.forEach(el => {
        for (i = 0; i < el.length; i++) {
            nvTableau.push(el[i]);
        }
    })

    const tableauTrie = nvTableau.filter((item, index) => nvTableau.indexOf(item) === index);
    
    return tableauTrie;
} */

function tableauxSansDoublons(...arrays) {
    let nvTableau = [];

    arrays.forEach(item => {
        nvTableau = [...nvTableau, ...item]
    })

    return Array.from(new Set(nvTableau));
}


console.log(tableauxSansDoublons([5, 5, 4], [6, 3, 5])); // [5, 4, 6, 3]
console.log(tableauxSansDoublons(["a", "b", "z"], ["z", "e", "a"])); // ["a", "b", "z", "e"]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui assemble tous les tableaux que l'on passe en argument, sans avoir de doublons(si il y a deux fois(ou plus) la même valeur, supprimez la).


// -----------------  Conseils ------------------- //

// Array.from(arguments)
// filter()
// forEach()
// push()
// indexOf







