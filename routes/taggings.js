const express = require('express');
const router = express.Router();
const { getAllTaggings,
        getOneTagging,
        getTaggingsForResearcher,
        getTaggingsForAnimal,
        addTagging } = require('../queries/q-taggings')

router.get('/', getAllTaggings);
router.get('/:id', getOneTagging);
router.get('/researchers/:id', getTaggingsForResearcher);
router.get('/animals/:id', getTaggingsForAnimal);
router.post('/', addTagging);

module.exports = router
