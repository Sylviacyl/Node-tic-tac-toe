function createGame() {
  // Make an array with 9 nulls
return {
  grid: new Array(9).fill(null),
  playerID: 1
};

}

function makePlay(game, gridIndex) {
  if (game.grid[gridIndex] != null) {
    return false;
  }

  game.grid[gridIndex] = game.playerID;
  if (game.playerID === 1)  {
    game.playerID = 2;

  }
  else {
    game.playerID = 1;
  }
  checkWon(game);
  return true;

}
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6]
]
function checkWon(game) {
  winningPositions.forEach(([a, b, c]) => {
    if (
      (game.grid[a] != null) &&
      (game.grid[a] === game.grid[b]) &&
      (game.grid[a] === game.grid[c])
    ) {
      game.winningPlayerID = game.grid[a];
    }
  })
}



module.exports = {
  createGame,
  makePlay,
  checkWon
};
