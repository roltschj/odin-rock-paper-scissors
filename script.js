document.addEventListener('DOMContentLoaded', function(event) {
  function selectWeapon() {
    let randNum = Math.random() * 100;
  
    if (randNum <= 33.333333) {
      return 'Rock';
    } else if (randNum > 33.333333 && randNum < 66.666666) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }
  
  function playRound(userSelection) {
    const computerSelection = selectWeapon();
    let result = '';
    
    if (userSelection === "Rock") {
      if (computerSelection === "Paper") {
        result = "lose";
      } else if (computerSelection === "Scissors") {
        result = "win";
      } else {
        result = "draw";
      }
    } else if (userSelection === "Paper") {
      if (computerSelection === "Rock") {
        result = "win";
      } else if (computerSelection === "Paper") {
        result = "draw";
      } else {
        result = "lose";
      }
    } else if (userSelection === "Scissors") {
      if (computerSelection === "Rock") {
        result = "lose";
      } else if (computerSelection === "Paper") {
        result = "win";
      } else {
        result = "draw";
      }
    }

    if (result !== "draw") {
      resultMessage.textContent = `You played ${userSelection}. Computer plays ${computerSelection}. You ${result}!`
    } else {
      resultMessage.textContent = "It's a draw!"
    }

    if (result === "win") {
      userScore++;
      playScoreText.textContent = `HUMAN: ${userScore}`;
    } else if (result === "lose") {
      compScore++;
      compScoreText.textContent = `COMPUTER: ${compScore}`;
    }

    if (userScore > 4 || compScore > 4) {
      gameEnd(userScore, compScore);
    }
  }

  function gameEnd(userScore, compScore) {
    let winMsg = '';

    if (userScore < compScore) {
      winMsg = 'Computer Wins!';
    } else {
      winMsg = 'You win!';
    }

    resultMessage.textContent = `END RESULT: YOUR SCORE: ${userScore}. COMPUTER SCORE: ${compScore}. ${winMsg} Reload page to start new game.`;

    const buttons = document.querySelector('#buttons');
    buttons.parentNode.removeChild(buttons);
  }
    
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');
  const resultMessage = document.querySelector('#statusMessage');

  const winMessage = document.createElement('p');

  const playScoreText = document.querySelector('#userScore');
  const compScoreText = document.querySelector('#compScore');

  let userScore = 0;
  let compScore = 0;
  
  rockButton.addEventListener('click', () => {
    playRound("Rock");
  });
  paperButton.addEventListener('click', () => {
    playRound("Paper");
    });
  scissorsButton.addEventListener('click', () => {
    playRound("Scissors")
  });
});

