const inputUtilisateur = document.querySelector('.form-group:nth-child(1) input');
const inputMail = document.querySelector('.form-group:nth-child(2) input');
const inputMdp = document.querySelector('.form-group:nth-child(3) input');
const inputMdpConf = document.querySelector('.form-group:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');


inputUtilisateur.addEventListener('input', (e) => {
    if (e.target.value.length >= 3 && e.target.value.length <= 24) {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    } else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }
})

inputMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;

    if (e.target.value.search(regexEmail) === 0) {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";
    } else if (e.target.value.search(regexEmail) === -1) {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }

})

// Validation création de MDP

let valeurInput;

const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffre = /[0-9]/;

let objValidation = {
    symbole: 0,
    lettre: 0,
    chiffre: 0
}

inputMdp.addEventListener('input', (e) => {
    valeurInput = e.target.value;

    if (valeurInput.search(specialCar) !== -1) {
        objValidation.symbole = 1;
    }
    if (valeurInput.search(alphabet) !== -1) {
        objValidation.lettre = 1;
    }
    if (valeurInput.search(chiffre) !== -1) {
        objValidation.chiffre = 1;
    }

    if (e.inputType = 'deleContentBackward') {
        if (valeurInput.search(specialCar) === -1) {
            objValidation.symbole = 0;
        }
        if (valeurInput.search(alphabet) === -1) {
            objValidation.lettre = 0;
        }
        if (valeurInput.search(chiffre) === -1) {
            objValidation.chiffre = 0;
        }
    }

    let testAll = 0;

    for (const property in objValidation) {
        if (objValidation[property] > 0) {
            testAll++;
        }
    }
    if (testAll < 3) {
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
        allSpan[2].style.display = "inline";
    } else {
        allImg[2].src = "ressources/check.svg";
        allSpan[2].style.display = "none";
    }

    if (valeurInput.length <= 6 && valeurInput.length > 0) {
        allLigne[0].style.display = "block";
        allLigne[1].style.display = "none";
        allLigne[2].style.display = "none";
    } else if (valeurInput.length > 6 && valeurInput.length <= 9) {
        allLigne[0].style.display = "block";
        allLigne[1].style.display = "block";
        allLigne[2].style.display = "none";
    } else if (valeurInput.length > 9) {
        allLigne[0].style.display = "block";
        allLigne[1].style.display = "block";
        allLigne[2].style.display = "block";
    } else if (valeurInput.length === 0) {
        allLigne[0].style.display = "none";
        allLigne[1].style.display = "none";
        allLigne[2].style.display = "none";
    }
})

// confirmation du MDP
inputMdpConf.addEventListener('input', (e) => {

    if (e.target.value.lenth === 0) {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    } else if (e.target.value === valeurInput) {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg";
    } else {
        allImg[3].src = "ressources/error.svg";
    }
})
