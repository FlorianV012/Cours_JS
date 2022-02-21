/* function lePlusFrequent(tab) {

    let myObj = {};
    let copieTab = tab;
    let compteur = 0;

    let occurenceMax = 0;
    let itemPlusNombreux = [];

    while (copieTab.length > 0) {
        for (i = 0; i < copieTab.length; i++) {
            if (copieTab[0] === copieTab[i]) {
                compteur++;
            }
        }
        myObj[`nbDe${copieTab[0]}`] = [copieTab[0], compteur];
        compteur = 0;

        let varAct = copieTab[0];
        copieTab = copieTab.filter(item => item != varAct);
    }

    for (prop in myObj) {
        if (myObj[prop][1] >= occurenceMax) {
            occurenceMax = myObj[prop][1];
        }
    }

    for (prop in myObj) {
        if (myObj[prop][1] === 4) {
            itemPlusNombreux.push(myObj[prop][0])
        }
    }

    if (itemPlusNombreux.length > 1) {
        return `Les éléments : ${itemPlusNombreux} sont apparus le plus souvent, pour un total de ${occurenceMax} fois chacun.`
    } else {
        return `L'élément : ${itemPlusNombreux} est apparu le plus souvent, pour un total de ${occurenceMax} fois.`
    }

} */

function lePlusFrequent(tab) {

    let occurenceMax = 1;
    let compteur = 0;
    let item = [];

    for (let i = 0; i < tab.length; i++) {

        for (let j = i; j < tab.length; j++) {

            if (tab[i] == tab[j]) {
                compteur++;
            }

        }
        if (occurenceMax <= compteur) {
            occurenceMax = compteur;
            item.push(tab[i]);
        }
        compteur = 0;
    }

    if (item.length > 1) {
        return `Les éléments : ${item} sont apparus le plus souvent, pour un total de ${occurenceMax} fois chacun.`
    } else {
        return `L'élément : ${item} est apparu le plus souvent, pour un total de ${occurenceMax} fois.`
    }
}




console.log(lePlusFrequent(['a', 3, 2, 'a', 'b', 2, 'b', 4, 'a', 3, 'a', 3, 3]));


// -----------------  Énoncé ------------------- //

// Créez un programme qui trouve le ou les éléments qui apparaissent le plus dans un tableau.

// -----------------  Conseils ------------------- //

// boucle for
// if
// Objet
// while
// filter
// push
//...




