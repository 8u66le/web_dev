function startGame() {
    let attempts = 5;
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    while (attempts > 0) {
        const userGuess = prompt('Угадайте число от 1 до 10. У вас осталось ' + attempts + ' попыток.');
        if (userGuess === null) {
            alert('Игра окончена.');
            return;
        }

        const guess = parseInt(userGuess);

        if (isNaN(guess)) {
            alert('Пожалуйста, введите число.');
            continue;
        }

        if (guess === secretNumber) {
            alert('Поздравляем! Вы угадали число.');
            break;
        } else if (guess < secretNumber) {
            alert('Загаданное число больше.');
        } else {
            alert('Загаданное число меньше.');
        }
        attempts--;
    }

    if (attempts === 0) {
        alert('Вы использовали все попытки. Загаданное число было: ' + secretNumber);
    }

    if (confirm('Хотите сыграть еще раз?')) {
        startGame();
    }
}
