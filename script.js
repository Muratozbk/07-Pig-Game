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

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Starting Conditions

let scores, currentScore, activePlayer, playing;

const init = function () {
      scores = [0, 0];
      currentScore = 0;
      activePlayer = 0;
      playing = true;

      current0El.textContent = 0;
      current1El.textContent = 0;
      score0El.textContent = 0;
      score1El.textContent = 0;

      diceEl.classList.add('hidden');
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
      player0El.classList.remove('player--winner');
      player1El.classList.remove('player--winner');
};
init();

const switchPlayer = function () {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
}

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
      if (playing) {
            //1.Generate a random dice roll  
            const dice = Math.trunc(Math.random() * 6) + 1;

            //2.Display dice
            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${dice}.png`;
            //3.Check for rolled 1: if true,
            // add dice to score;
            if (dice !== 1) {
                  currentScore += dice;
                  document.getElementById(`current--${activePlayer}`).textContent
                        = currentScore;

                  // current0El.innerHTML = currentScore;
            } else {
                  // switch to next player
                  switchPlayer();
                  console.log('ac:', activePlayer, '  dice:', dice);
            }
      }
});


document.querySelector('.btn--hold').addEventListener('click', () => {
      if (playing) {
            //1.Add current score to active p.score 
            scores[activePlayer] += currentScore;
            // scores[1]  = scores[1] + currentScore
            document.getElementById(`score--${activePlayer}`).textContent
                  = scores[activePlayer];

            //2.Check if player's score is >= 100 
            if (scores[activePlayer] >= 100) {
                  console.log(`Player${activePlayer + 1} winner`);
                  //Finish Game
                  playing = false;
                  diceEl.classList.add('hidden')
                  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            } else {
                  //Switch to the next player
                  switchPlayer();
            }
      }
})

btnNew.addEventListener('click', init)

// let score = 0;  ---forEach----
// document.querySelectorAll('.score').forEach(skor => {
//     skor.innerHTML = score;
// })



// btnRoll.addEventListener('click', function () {
//       //1.Generate a random dice roll  
//       const dice = Math.trunc(Math.random() * 6) + 1;
//       //2.Display dice
//       diceEl.classList.remove('hidden');
//       diceEl.src = `dice-${dice}.png`
//       console.log(dice);
//       //3.Check for rolled 1: if true,
//       if (dice !== 1) {
//             if (player1.classList.contains('player--active')) {
//                   currentScore += dice;
//                   current0El.textContent = currentScore;
//                   // add cuurent score to score;
//             } else if (player2.classList.contains('player--active')) {
//                   currentScore2 += dice;
//                   current1El.textContent = currentScore2;
//                   // add cuurent score to score;
//             }
//       } else {
//             // switch to next player
//             if (player1.classList.contains('player--active')) {
//                   player1.classList.remove('player--active');
//                   player2.classList.add('player--active');
//             } else if (player2.classList.contains('player--active')) {
//                   player1.classList.add('player--active');
//                   player2.classList.remove('player--active');
//             }
//       }
// })