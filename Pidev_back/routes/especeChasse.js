var express = require('express');
var router = express.Router();
var EspecesChasse = require("../Models/especeChasse");



// Getting all
router.get('/', async (req, res) => {
    try {
        var especesChasse = await EspecesChasse.find()
        res.json(especesChasse)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getEspecesChasse, (req, res) => {
    res.json(res.especesChasse)
})

// Creating one
router.post('/', async (req, res) => {
    var especesChasse = new EspecesChasse({
        nom:req.body.nom,
        description:req.body.description,
        photo:req.body.photo,
        localisation:req.body.localisation,
    })
    try {
        const newEspecesChasse = await especesChasse.save()
        res.status(201).json(newEspecesChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getEspecesChasse, async (req, res) => {

    if (req.body.nom != null) {
        res.especesChasse.nom = req.body.nom
    }
    if (req.body.description != null) {
        res.especesChasse.description = req.body.description
    }
    if (req.body.photo != null) {
        res.especesChasse.photo = req.body.photo
    }
    if (req.body.localisation != null) {
        res.especesChasse.localisation = req.body.localisation
    }
    try {
        let especesChasse = await res.especesChasse.save()
        res.json(especesChasse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getEspecesChasse, async (req, res) => {
    try {
        await res.especesChasse.remove()
        res.json({ message: 'Deleted localisationChasee' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})







async function getEspecesChasse(req, res, next) {
    let especesChasse
    try {
        especesChasse = await EspecesChasse.findById(req.params.id)
        if (especesChasse == null) {
            return res.status(404).json({ message: 'Cannot find especesChasse' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.especesChasse = especesChasse
    next()
}
module.exports = router;
