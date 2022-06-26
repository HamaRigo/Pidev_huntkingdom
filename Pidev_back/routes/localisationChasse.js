var express = require('express');
var router = express.Router();
var LocalisationChasee=require('../Models/localisationChasse')
const especesChasse = require("../Models/especeChasse");



// Getting all
router.get('/', async (req, res) => {
    try {
        var localisationChasee = await LocalisationChasee.find()
        res.json(localisationChasee)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getLocalisationChasse, (req, res) => {
    res.json(res.localisationChasee)
})

// Creating one
router.post('/', async (req, res) => {
    var localisationChasee = new LocalisationChasee({
        longitude:req.body.longitude,
        latitude:req.body.latitude,
        nom:req.body.nom,
        description:req.body.description,
        especes:req.body.especes
    })
    try {
        const newLocalisationChasee = await localisationChasee.save()
        res.status(201).json(newLocalisationChasee)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getLocalisationChasse, async (req, res) => {
    if (req.body.longitude != null) {
        res.localisationChasee.longitude = req.body.longitude
    }
    if (req.body.latitude != null) {
        res.localisationChasee.latitude = req.body.latitude
    }
    if (req.body.nom != null) {
        res.localisationChasee.nom = req.body.nom
    }
    if (req.body.description != null) {
        res.localisationChasee.description = req.body.description
    }
    if (req.body.especes != null) {
        res.localisationChasee.especes = req.body.especes
    }
    try {
        let localisationChasee = await res.localisationChasee.save()
        res.json(localisationChasee)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getLocalisationChasse, async (req, res) => {
    try {
        await res.localisationChasee.remove()
        res.json({ message: 'Deleted localisationChasee' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})







async function getLocalisationChasse(req, res, next) {
    let localisationChasee
    try {
        localisationChasee = await LocalisationChasee.findById(req.params.id)
        if (localisationChasee == null) {
            return res.status(404).json({ message: 'Cannot find localisationChasee' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.localisationChasee = localisationChasee
    next()
}
module.exports = router;
