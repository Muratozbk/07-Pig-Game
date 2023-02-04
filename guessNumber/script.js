'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// V:74 IMPORTANT:

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //When there is no input
        if (!guess) {
            // document.querySelector('.message').textContent =
            //     '⛔ No number!';
            displayMessage('⛔ No number!');
            //When Player wins      
        } else if (guess === secretNumber) {
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ?
                    '👆 Too High!' : '👇 Too Low!');
                score--;
                displayScore(score);
            } else {
                displayMessage('❗💀❗ Game Over!');
                document.querySelector('.message').style.fontSize = '2.8rem';
                displayScore(0);
            }

            // } else if (guess > secretNumber) {
            //     //When guess is too high      
            //     if (score > 1) {
            //         document.querySelector('.message').textContent =
            //             '👆 Too High!';
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     } else {
            //         document.querySelector('.message').textContent =
            //             '❗💀❗ Game Over!';
            //         document.querySelector('.message').style.fontSize = '2.8rem';
            //         document.querySelector('.score').textContent = 0;
            //     }

            //     //When guess is too low 
            // } else if (guess < secretNumber) {
            //     if (score > 1) {
            //         document.querySelector('.message').textContent =
            //             '👇 Too Low!';
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     } else {
            //         document.querySelector('.message').textContent =
            //             '❗💀❗ Game Over!';
            //         document.querySelector('.score').textContent = 0;
            //         document.querySelector('.message').style.fontSize = '2.8rem'
            //     }

            // }
        }
    });
// Challange V76--
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayScore(score);
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').style.fontSize = '2rem'

})

// else if (guess - secretNumber === 1) {
//     document.querySelector('.message').textContent =
//         '👆 High!';
//     score--;
//     document.querySelector('.score').textContent = score;

// }

// const array2 = [Math.trunc(Math.random() * 6) + 1];
// const array3 = [Math.trunc(Math.random() * 6) + 1];
// const number4 = array2.concat(array3);
// console.log(number4, array2[0] + array3[0]);

