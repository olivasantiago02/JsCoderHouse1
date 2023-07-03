
// Función que se llama al hacer clic en un botón de elección
function play(userChoice) {
    var choices = ['piedra', 'papel', 'tijeras'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = determineWinner(userChoice, computerChoice);
    var message = 'Elegiste: ' + userChoice + '. Santiago eligió: ' + computerChoice + '. ';

    if (result === 'empate') {
        message += 'Es un empate.';
        document.getElementById('result').className = 'empate'; // Asigna la clase 'empate'
    } else if (result === 'usuario') {
        message += '¡Ganaste!';
        document.getElementById('result').className = 'ganaste'; // Asigna la clase 'ganaste'
        confetti.start(); // Inicia la animación de confeti
    } else {
        message += 'Perdiste. :(';
        document.getElementById('result').className = 'perdiste'; // Asigna la clase 'perdiste'
    }

    document.getElementById('result').textContent = message;
}

// Función que determina el ganador del juego
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'empate';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        return 'usuario';
    } else {
        return 'santiago';
    }
}
