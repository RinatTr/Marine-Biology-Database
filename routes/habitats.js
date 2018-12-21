const express = require('express');
const router = express.Router();
const { getAllHabitats,
        getOneHabitat,
        addHabitat } = require('../queries/q-habitats')

router.get('/', getAllHabitats);
router.get('/:id', getOneHabitat);
router.post('/', addHabitat);


module.exports = router
