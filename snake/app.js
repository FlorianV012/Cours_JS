const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// Variables

// Vitesse sur X
let vx = 10;
// Vitesse sur Y
let vy = 0;
// pomme
let pommeX = 0;
let pommeY = 0;
// Score
let score = 0;
// bugDirection
let bugDirection = false;
// StopGame
let stopGame = false;

let snake = [{ x: 140, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 }, { x: 110, y: 150 }]

function animation() {

    if (stopGame === true) {
        return;
    } else {
        setTimeout(function () {
            bugDirection = false;
            nettoieCanvas();
            dessinePomme();
            faireAvancerSerpent();
            dessineLeSerpent();
            animation();
        }, 100);
    }
}

animation();
creerPomme();

function nettoieCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function dessineLesSegments(segment) {
    ctx.fillStyle = "#00fe14";
    ctx.strokeStyle = "black";
    ctx.fillRect(segment.x, segment.y, 10, 10);
    ctx.strokeRect(segment.x, segment.y, 10, 10);
}
function dessineLeSerpent() {
    snake.forEach(segment => {
        dessineLesSegments(segment);
    })
}

function faireAvancerSerpent() {

    const head = { x: snake[0].x + vx, y: snake[0].y + vy };
    snake.unshift(head);

    if (finDuJeu()) {
        snake.unshift(head);
        recommencer();
        stopGame = true;
        return;
    }

    const serpentMangePomme = snake[0].x === pommeX && snake[0].y === pommeY;

    if (serpentMangePomme) {
        score += 10;
        document.getElementById('score').innerHTML = score;

        creerPomme();
    } else {
        snake.pop();
    }
}

dessineLeSerpent();

document.addEventListener('keydown', changerDirection);

function changerDirection(e) {
    // eviter le bug
    if (bugDirection) return;
    bugDirection = true;

    const FLECHE_GAUCHE = 37;
    const FLECHE_DROITE = 39;
    const FLECHE_ENHAUT = 38;
    const FLECHE_ENBAS = 40;

    const direction = e.keyCode;

    const monter = vy === -10;
    const descendre = vy === 10;
    const aDroite = vx === 10;
    const aGauche = vx === -10;

    if (direction === FLECHE_GAUCHE && !aDroite) { vx = -10; vy = 0; }
    if (direction === FLECHE_DROITE && !aGauche) { vx = 10; vy = 0; }
    if (direction === FLECHE_ENHAUT && !descendre) { vx = 0; vy = -10; }
    if (direction === FLECHE_ENBAS && !monter) { vx = 0; vy = 10; }

}

function random() {

    return Math.round((Math.random() * 290) / 10) * 10;
}

function creerPomme() {
    pommeX = random();
    pommeY = random();

    snake.forEach(function (segment) {

        const serpentSurPomme = segment.x == pommeX && segment.y == pommeY;

        if (serpentSurPomme) {
            creerPomme();
        }

    })
}
function dessinePomme() {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.arc(pommeX + 5, pommeY + 5, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}


function finDuJeu() {
    let corpSerpent = snake.slice(1, -1);
    let mordu = false;
    corpSerpent.forEach(segment => {
        if (segment.x === snake[0].x && segment.y === snake[0].y) {
            mordu = true;
        }
    })

    const toucheMurGauche = snake[0].x < -1;
    const toucheMurDroite = snake[0].x > canvas.width - 10;
    const toucheMurTop = snake[0].y < -1;
    const toucheMurBottom = snake[0].y > canvas.height - 10;

    let gameOver = false;

    if (mordu || toucheMurGauche || toucheMurDroite || toucheMurTop || toucheMurBottom) {
        gameOver = true;
    }

    return gameOver;
}

function recommencer() {
    const restart = document.getElementById('recommencer');
    restart.style.display = "block";

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 32) {
            document.location.reload(true);
        }
    })
}