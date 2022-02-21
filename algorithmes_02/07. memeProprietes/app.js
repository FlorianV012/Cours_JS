function memeProps(obj, source) {
    const clesRecherche = Object.keys(source);

    let test = clesRecherche.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

    return test;
}


console.log(memeProps({ age: 44, taille: 188 }, { age: 44, taille: 188 })); // true 
console.log(memeProps({ age: 44, taille: 188 }, { age: 24, taille: 180 })); // false 
console.log(memeProps({ age: 44, taille: 188 }, { age: 10, taille: 148 })); // false

console.log(memeProps({ age: 10, taille: 148, cheveux: 'brun' }, { age: 10, taille: 148 }));

// -----------------  Énoncé ------------------- //

// Créez un programme pour vérifier si le premier objet contient au moins les propriétés du second, et que ces propriétés ont également les mêmes valeurs.
// -----------------  Conseils ------------------- //

// Object.keys()
// every()
// hasOwnProperty()






