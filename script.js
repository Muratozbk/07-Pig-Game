'use strict';
/*
roll dice = 1.roll random dice number  ,
            2 display roll number ,
            3 if roll is 1 ? switch player 
             : değilse add dice roll to cuurent score ,
            4 display new current score.

    hold: 1- add cuurent score to score;
          2-if score >100 ? player win : switch player;
    
 new game: 1 reset all scores to 0;
           2. Set player 1 as starting player  */

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.getElementById('score--0');
const player2 = document.getElementById('score--1');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
      //1.Generate a random dice roll  
      const dice = Math.trunc(Math.random() * 6) + 1;

      //2.Display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;
      console.log(dice);
      //3.Check for rolled 1: if true,
      if (dice !== 1) {
            currentScore += dice;
            current0El.innerHTML = currentScore; // Change Later

            // add cuurent score to score;
      } else {
            // switch to next player
      }
})

// v:84
















// let score = 0;  ---forEach----
// document.querySelectorAll('.score').forEach(skor => {
//     skor.innerHTML = score;
// })



