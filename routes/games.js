const express = require('express');
const router = express.Router();
const handlersGames = require('../handlers/games')

router.route('/')
    .post(handlersGames.createGame)
    .get(handlersGames.getAllGames);

router.route('/:id')
    .get(handlersGames.getOneGame)
    .put(handlersGames.updateOneGame)
    .delete(handlersGames.deleteOneGame);

module.exports = router;