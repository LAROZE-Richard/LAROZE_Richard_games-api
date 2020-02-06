const db = require('../models');

exports.createGame = async (req, res) => {
    try {
        let newGame = await db.Game.create(req.body);
        return res.status(200).json({
            message: 'Nouveau jeu crée avec succès !',
            newGame
        });
    } catch (err) {
        return res.status(400)
            .json({
                message: 'Whoops, impossible de créer le jeu',
                error: err
            });
    }
};

exports.getAllGames = async (req, res) => {
    try {
        if (req.query.editor != null && req.query.editor.length > 0)
        {
            let games = await db.Game.find({ editor: req.query.editor})
                .sort({releaseDate: 1})
                .select({name: 1, editor: 1, releaseDate: 1});
            return res.status(200).json(games);
        }
        else if (req.query.isAwardWinner != null && req.query.isAwardWinner.length > 0)
        {
            let game = await db.Game.find({ isAwardWinner: req.query.isAwardWinner});
            return res.status(200).json(game);
        }

        let games = await db.Game.find();
        return res.status(200).json(games);
    } catch (err) {
        return res.status(400)
            .json({
                message: 'Whoops, impossible de trouver des jeux',
                error: err
            });
    }
};

exports.getOneGame = async (req, res) => {
    try {
        let game = await db.Game.findById(req.params.id);
        return res.status(200).json(game);
    } catch (err) {
        return res.status(400)
            .json({
                message: 'Whoops, impossible de trouver le jeu',
                error: err
            });
    }
};

exports.updateOneGame = async (req, res) => {
    try {
        let game = await db.Game.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            });
        return res.status(200).json({
            message: "Jeu mis à jour !",
            game
        });
    } catch (err) {
        return res.status(400)
            .json({
                message: 'Whoops, impossible de mettre à jour le jeu',
                error: err
            });
    }
};

exports.deleteOneGame = async (req, res) => {
    try {
        let game = await db.Game.findByIdAndRemove(req.params.id);
        return res.status(200).json("Jeu supprimé !");
    } catch (err) {
        return res.status(400)
            .json({
                message: 'Whoops, impossible de supprimer le jeu',
                error: err
            });
    }
};
