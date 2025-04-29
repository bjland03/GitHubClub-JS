const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }
    else{
      console.log('Error. Please enter a valid option.')
    }
  }
  
  const getComputerChoice = () => 
  {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'The game was a tie!';
    }
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratualtions, you won!';
      }
    }
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    }
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    }
    if(userChoice === 'bomb') {
    return 'You may pass, little hobbit!';
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  