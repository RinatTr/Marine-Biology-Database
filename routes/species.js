const express = require('express');
const router = express.Router();
const { getAllSpecies,
        getOneSpecie,
        addSpecie} = require('../queries/q-species')

router.get('/', getAllSpecies);
router.get('/:id', getOneSpecie);
router.post('/', addSpecie);


module.exports = router
