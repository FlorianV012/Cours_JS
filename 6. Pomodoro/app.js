const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnStart = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let checkInterval = false;
let tempsInitial = 1500;
let tempsDeRepos = 300;
let pause = false;
let nbCycles = 0;
cycles.innerText = `Nombre de cycles ${nbCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}:${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}:${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

btnStart.addEventListener('click', () => {

    if (checkInterval === false) {
        checkInterval = true;

        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}:${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

        let timer = setInterval(() => {
            if (pause === false && tempsInitial > 0) {
                tempsInitial--;
                affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}:${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
                tempsInitial = 1500;
                tempsDeRepos = 300;
                nbCycles++;
                affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}:${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}:${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
                cycles.innerText = `Nombre de cycles ${nbCycles}`;

            } else if (pause === false && tempsInitial === 0) {
                tempsDeRepos--;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}:${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }

        }, 1000);

        // Reset
        btnReset.addEventListener('click', ()=>{
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1500;
            tempsDeRepos = 300;
            affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}:${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                    affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}:${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
                    cycles.innerText = `Nombre de cycles ${nbCycles}`;
        })


    } else {
        return;
    }    
})

btnPause.addEventListener('click', () => {
    if (pause === false) {
        btnPause.innerText = "Play";
    } else if (pause === true) {
        btnPause.innerText = "Pause";
    }

    pause = !pause;

})