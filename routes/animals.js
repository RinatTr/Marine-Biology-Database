const express = require('express');
const router = express.Router();
const { getAllAnimals,
        getOneAnimal,
        addAnimal,
        editAnimal,
        deleteAnimal } = require('../queries/q-animals')

router.get('/', getAllAnimals);
router.get('/:id', getOneAnimal);
router.post('/', addAnimal);
router.patch('/:id', editAnimal);
router.delete('/:id', deleteAnimal);

module.exports = router
