const inputCouleur = document.querySelectorAll('.inp-couleur');
const inputRange = document.querySelector('.inp-range');
const btns = document.querySelectorAll('button');
const fond = document.body;
const containerCouleurs = document.querySelector('.container-couleurs');
const spanInfo = document.querySelector('.info');
const btnRandom = document.querySelector('.random');

// Initialisation
let valCouleurs = ['#BA5370', '#F4E2D8'];
let inclinaison = 45;
let index = 3;
inputCouleur[0].value = valCouleurs[0];
inputCouleur[1].value = valCouleurs[1];
inputCouleur[0].style.background = valCouleurs[0];
inputCouleur[1].style.background = valCouleurs[1];
fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;

// Inclinaison
inputRange.addEventListener('input', (e) => {
    inclinaison = e.target.value * 3.6;
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`
})

// AJout-suppression de couleur
btns.forEach(btn => {
    btn.addEventListener('click', ajoutSuppression)
})

function ajoutSuppression(e) {

    spanInfo.innerText = '';
    const allInputs = document.querySelectorAll('.inp-couleur');
    const randomColor = Math.floor(Math.random() * 12345678).toString(16);

    if (e.target.className === "plus") {
        if (allInputs.length > 8) {
            return;
        }

        const nvCouleur = document.createElement('input');
        nvCouleur.setAttribute('class', 'inp-couleur');
        nvCouleur.setAttribute('data-index', index);
        nvCouleur.setAttribute('maxlength', 7);
        nvCouleur.value = `#${randomColor.toUpperCase()}`;
        nvCouleur.style.background = `#${randomColor}`;
        containerCouleurs.appendChild(nvCouleur);

        valCouleurs.push(`#${randomColor.toUpperCase()}`);

        fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
        index++;
    } else if (e.target.className === "moins") {
        if (valCouleurs.length === 2) {
            spanInfo.innerText = 'Deux couleurs minimums sont nécessaires !'
        } else {
            valCouleurs.pop();
            allInputs[allInputs.length - 1].remove();
            index--;
            fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
        }
    }
    // maj inputs ajoutés
    allInputs.forEach(inp => {
        inp.addEventListener('input', majColors);
    });
}

// maj inputs initaux
inputCouleur.forEach(inp => {
    inp.addEventListener('input', majColors);
});

function majColors(e) {
    let indexEnCours = e.target.getAttribute('data-index');
    e.target.value = e.target.value.toUpperCase();
    valCouleurs[indexEnCours - 1] = e.target.value.toUpperCase();
    e.target.style.background = valCouleurs[indexEnCours - 1]
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
}

// Randomisation des couleurs
btnRandom.addEventListener('click', () => {

    const inputs = document.querySelectorAll('.inp-couleur');
    for (i = 0; i < valCouleurs.length; i++) {
        valCouleurs[i] = `#${Math.floor(Math.random() * 12345678).toString(16)}`;
        inputs[i].value = valCouleurs[i].toUpperCase();
        inputs[i].style.background = valCouleurs[i].toUpperCase();
        fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
    }
})
