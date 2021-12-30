const affichage = document.querySelector('.affichage');
const btns = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const infoTxt = document.querySelector('.info-txt');
let cookieExistant = false;

const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

let day = ('0' + nextWeek).slice(9, 11);
let month = ('0' + (nextWeek.getMonth() + 1)).slice(-2);
let year = nextWeek.getFullYear();

document.querySelector('input[type=date]').value = `${year}-${month}-${day}`;

btns.forEach(btn => {
    btn.addEventListener('click', btnAction);
})

function btnAction(e) {
    let nvObj = {};

    inputs.forEach(input => {
        let attrName = input.getAttribute('name');
        let attrValue = attrName !== "cookieExpire" ? input.value : input.valueAsDate;
        nvObj[attrName] = attrValue;
    })
    let description = e.target.getAttribute('data-cookie');
    if (description === "creer") {
        creerCookie(nvObj.cookieName, nvObj.cookieValue, nvObj.cookieExpire);
    } else if (description === "toutAfficher") {
        listeCookies();
    }
}

function creerCookie(name, value, exp) {

    infoTxt.innerText = ""
    affichage.innerHTML = "";

    // Si le nom du cookie est déja utilisé
    let cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        cookie = cookie.trim();
        let formatCookie = cookie.split('=');
        if (formatCookie[0] === encodeURIComponent(name)) {
            cookieExistant = true;
        }
    })

    if (cookieExistant) {
        infoTxt.innerText = `Impossible de créer deux cookies avec le même nom.`
        cookieExistant = false;
        return;
    }

    // Si le cookie n'est pas nommé
    if (name.length === 0) {
        infoTxt.innerText = `Impossible de créer un cookie sans nom.`
        return;
    }

    document.cookie = `${encodeURIComponent(name)}=${value};expires=${exp.toUTCString()}`;
    let info = document.createElement('li');
    info.innerText = `Cookie ${name} créé.`;
    affichage.appendChild(info);
    setTimeout(() => {
        info.remove();
    }, 1500);
}

function listeCookies() {

    let cookies = document.cookie.split(';');
    if (cookies.join() === "") {
        infoTxt.innerText = 'Aucun cookie à afficher.'
        return;
    }

    cookies.forEach(cookie => {
        cookie = cookie.trim();
        let formatCookie = cookie.split('=');

        let item = document.createElement('li');

        infoTxt.innerText = 'Cliquez sur un cooke dans la liste pour le supprimer.'
        item.innerText = `Nom : ${decodeURIComponent(formatCookie[0])}, Valeur : ${decodeURIComponent(formatCookie[1])} `;
        affichage.appendChild(item);

        // Suppression d'un cookie
        item.addEventListener('click', () => {
            document.cookie = `${formatCookie[0]}=; expires=${new Date(0)}`;
            item.innerText = `Cookie ${formatCookie[0]} supprimé.`;
            setTimeout(() => {
                item.remove();
            }, 1500);
        })

    })


}