const express = require('express');
const router = express.Router();
const { getAllSightings,
        getSightingsForSpecies,
        getSightingsForResearcher,
        getSightingsForHabitat,
        addSighting,
        deleteSighting } = require('../queries/q-sightings')

router.get('/', getAllSightings);
router.get('/species/:id', getSightingsForSpecies);
router.get('/researchers/:id', getSightingsForResearcher);
router.get('/habitats/:id', getSightingsForHabitat);
router.post('/', addSighting);
router.delete('/:id', deleteSighting);

module.exports = router
