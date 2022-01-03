const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, SecondeCarte;
let verrouillage = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})

function retourneCarte() {

    if (verrouillage) return;

    this.childNodes[1].classList.toggle('active');

    if (!carteRetournee) {
        carteRetournee = true;
        premiereCarte = this;
        return;
    }

    carteRetournee = false;
    SecondeCarte = this;

    correspondance();
}

function correspondance() {

    if (premiereCarte.getAttribute('data-attr') === SecondeCarte.getAttribute('data-attr')) {

        premiereCarte.removeEventListener('Click', retourneCarte);
        SecondeCarte.removeEventListener('Click', retourneCarte);

    } else {
        verrouillage = true;
        setTimeout(() => {

            premiereCarte.childNodes[1].classList.remove('active');
            SecondeCarte.childNodes[1].classList.remove('active');

            verrouillage = false;
        }, 1500)
    }

}

function aleatoire(){
    cartes.forEach(carte=>{
        let randomPos =Math.floor(Math.random()*12);
        carte.style.order = randomPos;
    })
}
aleatoire();