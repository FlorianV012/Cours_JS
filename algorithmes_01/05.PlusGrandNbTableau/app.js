function plusGrandNb(arr) {

  let resultats = [];

  for (i = 0; i < arr.length; i++) {

    let nbMax = arr[i][0];

    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > nbMax) {
        nbMax = arr[i][j];
      }
    }

    resultats.push(nbMax);
  }

  return resultats;
}


console.log(plusGrandNb([
  [1, 5, 8, 3],
  [15, 47, 88, 26],
  [32, 35, 37, 39],
  [3000, 1001, 857, 1]
]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en
// argument et qui retourne un seul tableau qui contient la valeur maximale de
// chaque tableaux.

// ----------------- CONSEILS -----------------

// Une boucle "for" permet d'itérer dans un tableau.
// Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...

// la méhode [].push(), pour pousser un élément dans un tableau;
// Testez :
// var arrTest = [0,10];
// arrTest.push(80);
// console.log(arrTest);




