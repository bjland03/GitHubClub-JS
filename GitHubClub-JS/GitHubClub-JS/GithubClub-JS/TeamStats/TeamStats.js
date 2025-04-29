const team = {
    _players: [
      {firstName: "John", lastName:  "Bonham", age: 74,},
      {firstName: 'Robert', lastName:  'Plant', age: 74,},
      {firstName: 'Jimmy', lastName:  'Page', age: 79,},
  
    ],
    _games: [
      {opponent: 'Chester', teamPoints: 32, opponentsPoints: 41},
      {opponent: 'Jimi', teamPoints: 32, opponentsPoints: 27},
      {opponent: 'Robin', teamPoints: 32, opponentsPoints: 63},
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge){
     let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      team._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentsPoints){
     let game = {
        Opponent: newOpponent,
        teamPoints: newTeamPoints,
        OpponentPoints: newOpponentsPoints
      };
      team._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  
  
  
  /*let player1 = {
    firstName: "John",
    lastName:  "Bonham",
    age: 74, 
  };
  
  let player2 = {
    firstName: 'Robert',
    lastName:  'Plant',
    age: 74,
  };
  
  let player3 = {
    firstName: 'Jimmy',
    lastName:  'Page',
    age: 79, 
  };
  */
  
  