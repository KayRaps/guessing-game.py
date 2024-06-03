// script.js

document.addEventListener('DOMContentLoaded', () => {
    const secretNumber = Math.floor(Math.random() * 20) + 1;
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');

    submitGuess.addEventListener('click', () => {
        const guess = parseInt(guessInput.value, 10);
        if (guess === secretNumber) {
            feedback.textContent = "Congratulations! You guessed the number!";
            feedback.style.color = 'green';
        } else if (guess < secretNumber) {
            feedback.textContent = "Your guess is too low. Try again.";
            feedback.style.color = 'red';
        } else {
            feedback.textContent = "Your guess is too high. Try again.";
            feedback.style.color = 'red';
        }
    });
});
