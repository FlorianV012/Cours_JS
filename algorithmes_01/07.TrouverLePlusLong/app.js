// Boucle For
function trouverLongueurMax(str) {
    const mots = str.split(' ');
    let longueurMax = 0;

    for (i = 0; i < mots.length; i++) {
        if (mots[i].length > longueurMax) {
            longueurMax = mots[i].length;
        }
    }

    return longueurMax;
}

console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));


// Méthode Callback
function trouverLongueurMaxCallback(str) {
    const mots = str.split(' ');

    return mots.reduce((x, y) => {
        return Math.max(x, y.length)
    }, 0)
}

console.log(trouverLongueurMaxCallback("Du sublime au ridicule il n'y a qu'un pas."));


// Méthode Callback
function trouverLongueurMaxCRecursion(str) {
    const mots = str.split(' ');

    if (mots.length === 1) {
        return mots[0].length;
    } else if (mots[0].length >= mots[1].length) {
        mots.splice(1, 1);
        return trouverLongueurMaxCRecursion(mots.join(' '));
    } else if (mots[0].length <= mots[1].length) {
        return trouverLongueurMaxCRecursion(mots.slice(1).join(' '));
    }
}

console.log(trouverLongueurMaxCRecursion("Du sublime au ridicule il n'y a qu'un pas."));


// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Le but ici va être de le faire de trois manières différentes, avec trois concepts
// différents.

// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)
