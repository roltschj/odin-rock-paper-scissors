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

function playRound(userSelection, computerSelection) {
  userSelection = userSelection.charAt(0).toUpperCase() + userSelection.toLowerCase().slice(1);
  
  console.log(`User plays: ${userSelection}`);
  console.log(`Computer plays: ${computerSelection}`);
  
  if (userSelection === "Rock") {
    if (computerSelection === "Rock") {
      return "It's a draw!";
    } else if (computerSelection === "Paper") {
      return "You lose! Paper beats Rock!";
    } else {
      return "You win! Rock beats Scissors!";
    }
  } else if (userSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You win! Paper beats Rock!";
    } else if (computerSelection === "Paper") {
      return "It's a draw!";
    } else {
      return "You lose! Scissors beats paper!";
    }
  } else if (userSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "You lose! Scissors beats Rock!";
    } else if (computerSelection === "Paper") {
      return "You win! Scissors beats paper!";
    } else {
      return "It's a draw!"
    }
  }
}

function game() {
  let userScore = 0;
  let compScore = 0;
  let numDraws = 0;

  for (i = 0; i < 5; i++) {
    let userSelection = '';

    while (userSelection.toLowerCase() != 'rock' &&
          userSelection.toLowerCase() != 'scissors' &&
          userSelection.toLowerCase() != 'paper') {
            userSelection = prompt('What\'s your move?:');
            
            if (userSelection != '') {
              userSelection = prompt('Don\'t be rude. What\'s your move?:');
            }
           }
    
    let result = playRound(userSelection, selectWeapon());

    console.log(result);

    if (result.includes("lose")) {
      compScore++;
    } else if (result.includes("win")) {
      userScore++;
    } else {
      numDraws++;
    }

    console.log(`Player Score: ${userScore}. Computer Score: ${compScore}. Draws: ${numDraws}`);
  }
}