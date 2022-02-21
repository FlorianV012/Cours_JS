function tailleDeLobj(obj) {
    let longueur = Object.keys(obj).length;

    return longueur
}

/* function tailleDeLobj(obj) {
    let longueur = 0;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            longueur++;
        }
    }

    return longueur
} */


console.log(tailleDeLobj({ nom: 'Julia', taille: 168, age: 35 })); //  




// -----------------  Énoncé ------------------- //

// Créez un programme pour déterminer la longueur d'un objet, la longueur étant le nombre de propriétés qu'il contient
// -----------------  Conseils ------------------- //


// hasOwnProperty()






