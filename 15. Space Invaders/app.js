const container = document.querySelector('.grille');
const affichage = document.querySelector('h3');
let resultats = 0;
let toutesLesDivs;
let alienInvaders = [];
let tireurPosition = 229;
let direction = 1;
let width = 20;

function creationGrilleEtAliens() {

    let indexAttr = 0;

    for (i = 0; i < 240; i++) {
        if (indexAttr === 0) {
            const bloc = document.createElement('div');
            bloc.setAttribute('data-left', 'true');
            container.appendChild(bloc);
            indexAttr++;
        } else if (indexAttr === 19) {
            const bloc = document.createElement('div');
            bloc.setAttribute('data-right', 'true');
            container.appendChild(bloc);
            indexAttr = 0;
        } else {
            const bloc = document.createElement('div');
            container.appendChild(bloc);
            indexAttr++;
        }
    }

    // création des aliens (3 lignes de 12)
    for (i = 1; i < 53; i++) {
        if (i === 13) {
            i = 21;
            alienInvaders.push(i);
        } else if (i === 33) {
            i = 41;
            alienInvaders.push(i);
        } else {
            alienInvaders.push(i);
        }
    }

    toutesLesDivs = document.querySelectorAll('.grille div');
    alienInvaders.forEach(invader => {
        toutesLesDivs[invader].classList.add('alien');
    })
    // création du tireur
    toutesLesDivs[tireurPosition].classList.add('tireur');

}

creationGrilleEtAliens()

// déplacer le tireur
function deplacerLeTireur(e) {
    toutesLesDivs[tireurPosition].classList.remove('tireur');
    if (e.keyCode === 37) {
        if (tireurPosition > 220) {
            tireurPosition -= 1;
        }
    } else if (e.keyCode === 39) {
        if (tireurPosition < 239) {
            tireurPosition += 1;
        }
    }
    toutesLesDivs[tireurPosition].classList.add('tireur');
}
document.addEventListener('keydown', deplacerLeTireur)

// déplacer les aliens
let descendreDroite = true;
let descendreGauche = true;

function deplacerLesAliens() {

    for (let i = 0; i < alienInvaders.length; i++) {

        if (toutesLesDivs[alienInvaders[i]].getAttribute('data-right') === 'true') {
            if (descendreDroite) {
                direction = 20;
                setTimeout(() => {
                    descendreDroite = false
                }, 50)
            } else if (descendreDroite === false) {
                direction = -1;
            }

            descendreGauche = true;

        } else if (toutesLesDivs[alienInvaders[i]].getAttribute('data-left') === 'true') {
            if (descendreGauche) {
                direction = 20;
                setTimeout(() => {
                    descendreGauche = false
                }, 50)
            } else if (descendreGauche === false) {
                direction = 1;
            }

            descendreDroite = true;
        }
    }


    for (let i = 0; i < alienInvaders.length; i++) {
        toutesLesDivs[alienInvaders[i]].classList.remove('alien');
    }
    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction;
    }
    for (let i = 0; i < alienInvaders.length; i++) {
        toutesLesDivs[alienInvaders[i]].classList.add('alien');
    }

    if (toutesLesDivs[tireurPosition].classList.contains('alien', 'tireur')) {
        affichage.textContent = "GAME OVER !";
        toutesLesDivs[tireurPosition].classList.add('boom');
        clearInterval(invaderId);
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if (alienInvaders[i] > toutesLesDivs.length - width) {
            affichage.textContent = 'Game Over';
            clearInterval(invaderId);
        }
    }

}
invaderId = setInterval(deplacerLesAliens, 500);

// Laser
function tirer(e) {
    let laserId;
    let laserEnCours = tireurPosition;

    function deplacementLaser() {
        toutesLesDivs[laserEnCours].classList.remove('laser');
        laserEnCours -= width;
        toutesLesDivs[laserEnCours].classList.add('laser');

        if (toutesLesDivs[laserEnCours].classList.contains('alien')) {
            toutesLesDivs[laserEnCours].classList.remove('laser');
            toutesLesDivs[laserEnCours].classList.remove('alien');
            toutesLesDivs[laserEnCours].classList.add('boom');

            alienInvaders = alienInvaders.filter(el => el !== laserEnCours)

            setTimeout(() => {
                toutesLesDivs[laserEnCours].classList.remove('boom')
            }, 250);
            clearInterval(laserId);

            resultats++;
            if (resultats === 36) {
                affichage.textContent = "Bravo, vous avez gagné !";
                clearInterval(invaderId);
            } else {
                affichage.textContent = `Score : ${resultats}`;
            }

        }

        if (laserEnCours < width) {
            clearInterval(laserId);
            setTimeout(() => {
                toutesLesDivs[laserEnCours].classList.remove('laser')
            }, 100)
        }
    }

    if (e.keyCode === 32) {
        laserId = setInterval(() => {
            deplacementLaser();
        }, 100);
    }

}
document.addEventListener('keyup', tirer)