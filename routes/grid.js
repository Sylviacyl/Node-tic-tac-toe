var express = require('express');
var router = express.Router();

const {
  createGame,
  makePlay,
  checkWon
} = require("../lib/grid.js");

/*
1 2 3
4 5 6
7 8 9
*/

router.get('/', function(req, res, next) {
  const game = createGame();
  req.session.game = game;
  res.render('grid', {
    grid: game.grid,
    winningPlayerID: game.winningPlayerID,
    title: 'Tic Tac Toe'
  });
});

router.post('/:index', function(req, res, next) {
  const { game } = req.session;
  const { index: indexString} = req.params;
  const index = parseInt(indexString, 10);
  makePlay(game, index);
  res.render('grid', {
    grid: game.grid,
    winningPlayerID: game.winningPlayerID,
    title: 'Tic Tac Toe'
});
});
module.exports = router;
